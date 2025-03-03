/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost, memo = {}) {
  const key = `${cost.join(",")}`;
  if (key in memo) return memo[key];
  if (cost.length === 0) return 0;

  const cost1 = cost[0] + minCostClimbingStairs(cost.slice(1), memo);
  const cost2 = (cost[1] ?? 0) + minCostClimbingStairs(cost.slice(2), memo);

  memo[key] = Math.min(cost1, cost2);
  return memo[key];
}
