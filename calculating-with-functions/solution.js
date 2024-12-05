/**
 *
 * @param {CallableFunction?} fn
 */
function zero(fn) {
  if (fn) {
    return fn(0);
  }

  return 0;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function one(fn) {
  if (fn) {
    return fn(1);
  }

  return 1;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function two(fn) {
  if (fn) {
    return fn(2);
  }

  return 2;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function three(fn) {
  if (fn) {
    return fn(3);
  }

  return 3;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function four(fn) {
  if (fn) {
    return fn(4);
  }

  return 4;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function five(fn) {
  if (fn) {
    return fn(5);
  }

  return 5;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function six(fn) {
  if (fn) {
    return fn(6);
  }

  return 6;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function seven(fn) {
  if (fn) {
    return fn(7);
  }

  return 7;
}

/**
 *
 * @param {CallableFunction?} fn
 */
function eight(fn) {
  if (fn) {
    return fn(8);
  }

  return 8;
}
/**
 *
 * @param {CallableFunction?} fn
 */
function nine(fn) {
  if (fn) {
    return fn(9);
  }

  return 9;
}

function plus(n1) {
  return function (n2) {
    return n2 + n1;
  };
}
function minus(n1) {
  return function (n2) {
    return n2 - n1;
  };
}
function times(n1) {
  return function (n2) {
    return n2 * n1;
  };
}

function dividedBy(n1) {
  return function (n2) {
    return Math.trunc(n2 / n1);
  };
}
