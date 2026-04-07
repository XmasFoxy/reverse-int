module.exports = function reverse(n) {
  const str = String(Math.abs(n));
  let arr = str.split('');
  arr = arr.reverse();
  const answer = arr.join('');
  return +answer;
};
