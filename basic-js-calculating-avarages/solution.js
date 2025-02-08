var Calculator = {
  average: function () {
    const sum =
      Array.from(arguments).reduce((prev, curr) => {
        return prev + curr;
      }, 0) ?? 0;

    if (sum == 0) return sum;

    return sum / Array.from(arguments).length;
  },
};
