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

const stack = new Stack();

const start = function (cb) {
  stack.clear();

  return cb;
};

const end = function () {
  return stack.peek();
};

const push = function (element) {
  stack.push(element);

  return function (cb) {
    if (cb.name === "end") {
      return cb();
    }

    return cb;
  };
};

const add = function (cb) {
  const op1 = stack.pop();
  const op2 = stack.pop();
  stack.push(op1 + op2);

  if (cb.name === "end") {
    return cb();
  }

  return cb;
};

const sub = function (cb) {
  const op1 = stack.pop();
  const op2 = stack.pop();
  stack.push(op1 - op2);

  if (cb.name === "end") {
    return cb();
  }

  return cb;
};

const mul = function (cb) {
  const op1 = stack.pop();
  const op2 = stack.pop();
  stack.push(op1 * op2);

  if (cb.name === "end") {
    return cb();
  }

  return cb;
};

const div = function (cb) {
  const op1 = stack.pop();
  const op2 = stack.pop();
  stack.push(Math.trunc(op1 / op2));

  if (cb.name === "end") {
    return cb();
  }

  return cb;
};

console.log((start)(push)(8)(push)(9)(push)(3)(mul)(mul)(end));
