function Stack() {
  this._items = [];
}

Stack.prototype.push = function push(element) {
  this._items.push(element);
};

Stack.prototype.pop = function pop() {
  return this._items.pop();
};

Stack.prototype.peek = function peek() {
  return this._items[this._items.length - 1];
};

Stack.prototype.isEmpty = function isEmpty() {
  return this._items.length === 0;
};

Stack.prototype.size = function size() {
  return this._items.length;
};

Stack.prototype.clear = function clear() {
  this._items = [];
};

Evaluator.prototype.handleOperator = function (token) {
  const operator = token;
  let operand1, operand2;

  if (operator === "#") {
    operand2 = this.stack.pop();

    if (!operand2) {
      throw new Error("Invalid expression");
    }

    this.stack.push(-operand2);
  } else {
    operand2 = this.stack.pop();
    operand1 = this.stack.pop();

    if (operand1 === undefined || operand2 === undefined) {
      throw new Error("Invalid expression");
    }

    switch (operator) {
      case "+": {
        this.stack.push(operand1 + operand2);
        break;
      }
      case "-": {
        this.stack.push(operand1 - operand2);
        break;
      }
      case "*": {
        this.stack.push(Math.trunc(operand1 * operand2));
        break;
      }
      case "/": {
        this.stack.push(Math.trunc(operand1 / operand2));
        break;
      }
      case "^": {
        this.stack.push(Math.pow(operand1, operand2));
        break;
      }
      default:
        throw new Error(`Invalid operator '${operator.getValue()}'`);
    }
  }
};

Evaluator.prototype.evaluate = function () {
  this.stack.clear();
  const tokens = this.expression.split(" ");

  for (const token of tokens) {
    if (token.match("^-*[0-9]+$")) {
      this.stack.push(Number(token));
      continue;
    }

    this.handleOperator(token);
  }

  if (this.stack.size() > 1) {
    throw new Error("Invalid expression");
  }

  return this.stack.pop();
};

function Evaluator(expression) {
  this.stack = new Stack();
  this.expression = expression;
}

