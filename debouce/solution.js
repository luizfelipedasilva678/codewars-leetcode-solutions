/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let start = 0;
  let timerId = -1;

  return function (...args) {
    const prevStart = start;
    start = Date.now();
    const diff = start - prevStart;

    if (diff < t) {
      if (timerId !== -1) clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 50);
const calls = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] },
];

for (const { inputs, t } of calls) {
  setTimeout(() => {
    log(inputs);
  }, t);
}
