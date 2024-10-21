class Stack {
  _items;

  constructor() {
    this._items = [];
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    return this._items.pop();
  }

  peek() {
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }
}

class Token {
  value;

  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return JSON.stringify(this);
  }
}

const ParenthesisType = {
  LEFT: 1,
  RIGHT: 2,
};

class Parenthesis extends Token {
  type;

  constructor(value, type) {
    super(value);

    this.type = type;
  }

  getType() {
    return this.type;
  }
}

const Associativity = {
  LEFT: "left",
  RIGHT: "right",
};

const Precedence = {
  PLUS: 1,
  MINUS: 1,
  ASTERISK: 2,
  SLASH: 2,
  CARET: 3,
  NEG: 3,
};

class Operator extends Token {
  precedence;
  associativity;

  constructor(value, precedence, associativity) {
    super(value);

    this.precedence = precedence;
    this.associativity = associativity;
  }

  getPrecedence() {
    return this.precedence;
  }

  getAssociativity() {
    return this.associativity;
  }
}

class NumberLiteral extends Token {
  constructor(value) {
    super(value);
  }
}

class LexerException extends Error {}

class Lexer {
  input;
  tokens = [];
  inputPos = 0;
  inputLen = 0;

  constructor(input) {
    this.input = input.replace(/\s/g, "");
    this.inputLen = this.input.length;
    this.tokenize();
  }

  getToken() {
    return this.tokens.shift();
  }

  isDigit(char) {
    return !isNaN(Number(char));
  }

  isOperator(char) {
    return ["+", "-", "*", "/", "^"].includes(char);
  }

  isParenthesis(char) {
    return ["(", ")"].includes(char);
  }

  tokenize() {
    while (this.inputPos < this.inputLen) {
      const symbol = this.input[this.inputPos];

      if (this.isDigit(symbol)) {
        this.makeNumber();
        continue;
      }

      if (this.isOperator(symbol)) {
        this.makeOperator();
        continue;
      }

      if (this.isParenthesis(symbol)) {
        this.makeParenthesis();
        continue;
      }

      throw new LexerException(`Uknown symbol: ${symbol}`);
    }
  }

  makeParenthesis() {
    switch (this.input[this.inputPos]) {
      case "(": {
        this.tokens.push(
          new Parenthesis(this.input[this.inputPos], ParenthesisType.LEFT)
        );
        break;
      }
      case ")": {
        this.tokens.push(
          new Parenthesis(this.input[this.inputPos], ParenthesisType.RIGHT)
        );
        break;
      }
    }

    this.inputPos++;
  }

  makeOperator() {
    switch (this.input[this.inputPos]) {
      case "+": {
        this.tokens.push(
          new Operator(
            this.input[this.inputPos],
            Precedence.PLUS,
            Associativity.LEFT
          )
        );
        break;
      }
      case "-": {
        if (
          (this.input[this.inputPos + 1] === "(" &&
            !this.isDigit(this.input[this.inputPos - 1]) &&
            this.input[this.inputPos - 1] !== ")") ||
          (this.isDigit(this.input[this.inputPos + 1]) &&
            !this.isDigit(this.input[this.inputPos - 1]))
        ) {
          this.tokens.push(
            new Operator("#", Precedence.NEG, Associativity.RIGHT)
          );
          break;
        }

        this.tokens.push(
          new Operator(
            this.input[this.inputPos],
            Precedence.MINUS,
            Associativity.RIGHT
          )
        );
        break;
      }
      case "*": {
        this.tokens.push(
          new Operator(
            this.input[this.inputPos],
            Precedence.ASTERISK,
            Associativity.LEFT
          )
        );
        break;
      }
      case "/": {
        this.tokens.push(
          new Operator(
            this.input[this.inputPos],
            Precedence.SLASH,
            Associativity.LEFT
          )
        );
        break;
      }
      case "^": {
        this.tokens.push(
          new Operator(
            this.input[this.inputPos],
            Precedence.CARET,
            Associativity.RIGHT
          )
        );
        break;
      }
    }

    this.inputPos++;
  }

  makeNumber() {
    let number = "";

    while (
      this.inputPos < this.inputLen &&
      (this.isDigit(this.input[this.inputPos]) ||
        this.input[this.inputPos] === ".")
    ) {
      number += this.input[this.inputPos];
      this.inputPos++;
    }

    this.tokens.push(new NumberLiteral(number));
  }
}

class ParserException extends Error {}

class Parser {
  stack = new Stack();
  output = [];
  lexer;

  constructor(lexer) {
    this.lexer = lexer;
  }

  handleOperator(token) {
    const operator1 = token;

    while (!this.stack.isEmpty() && this.stack.peek() instanceof Operator) {
      const operator2 = this.stack.peek();

      if (
        (operator1.getAssociativity() === Associativity.LEFT &&
          operator1.getPrecedence() <= operator2.getPrecedence()) ||
        (operator1.getAssociativity() === Associativity.RIGHT &&
          operator1.getPrecedence() < operator2.getPrecedence())
      ) {
        this.output.push(this.stack.pop());
      } else {
        break;
      }
    }

    this.stack.push(operator1);
  }

  handleParenthesis(token) {
    if (token.getType() === ParenthesisType.LEFT) {
      this.stack.push(token);
    } else {
      let operator = this.stack.pop();
      while (
        operator &&
        !(
          operator instanceof Parenthesis &&
          operator.getType() === ParenthesisType.LEFT
        )
      ) {
        this.output.push(operator);
        operator = this.stack.pop();

        if (
          this.stack.isEmpty() &&
          !(
            operator instanceof Parenthesis &&
            operator.getType() === ParenthesisType.LEFT
          )
        ) {
          throw new ParserException("Missing parenthesis");
        }
      }
    }
  }

  parse() {
    this.stack.clear();
    this.output = [];

    let token = this.lexer.getToken();
    while (token !== undefined) {
      if (token instanceof Operator) {
        this.handleOperator(token);
      } else if (token instanceof Parenthesis) {
        this.handleParenthesis(token);
      } else {
        this.output.push(token);
      }

      token = this.lexer.getToken();
    }

    while (!this.stack.isEmpty()) {
      this.output.push(this.stack.pop());
    }

    return this.output;
  }
}

class EvaluatorException extends Error {}

class Evaluator {
  stack = new Stack();
  parser;

  constructor(parser) {
    this.parser = parser;
  }

  handleOperator(token) {
    const operator = token;
    let operand1 = undefined;
    let operand2 = undefined;

    if (operator.getValue() === "#") {
      operand2 = this.stack.pop();

      if (!operand2) {
        throw new EvaluatorException("Invalid expression");
      }

      this.stack.push(-operand2);
    } else {
      operand2 = this.stack.pop();
      operand1 = this.stack.pop();

      if (operand1 === undefined || operand2 === undefined) {
        throw new EvaluatorException("Invalid expression");
      }

      switch (operator.getValue()) {
        case "+": {
          this.stack.push(operand1 + operand2);
          break;
        }
        case "-": {
          this.stack.push(operand1 - operand2);
          break;
        }
        case "*": {
          this.stack.push(operand1 * operand2);
          break;
        }
        case "/": {
          this.stack.push(operand1 / operand2);
          break;
        }
        case "^": {
          this.stack.push(Math.pow(operand1, operand2));
          break;
        }
        default:
          throw new EvaluatorException(
            `Invalid operator '${operator.getValue()}'`
          );
      }
    }
  }

  evaluate() {
    this.stack.clear();
    const tokens = this.parser.parse();

    for (const token of tokens) {
      if (token instanceof NumberLiteral) {
        this.stack.push(Number(token.getValue()));
        continue;
      }

      this.handleOperator(token);
    }

    if (this.stack.size() > 1) {
      throw new EvaluatorException("Invalid expression");
    }

    return this.stack.pop();
  }
}

const lexer = new Lexer("2 + 3");
const parser = new Parser(lexer);
const evaluator = new Evaluator(parser);

console.log(evaluator.evaluate());
