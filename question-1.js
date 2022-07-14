function counChar(str, char) {
  var count = 0;
  str.split('').forEach(x => x === char ? count++ : count);
  return count;
}
console.log(`output : ${counChar("bootcamp", "o")}`);
console.log(`output : ${counChar("banana", "a")}`);