// Input: n = 00000000000000000000000000001011
// Output: 3

function binary(n) {
  let count = 0;
  for (i = 1; i <= 32; i++) {
    count += n & 1;
    n = n >> 1;
  }
  return count;
}
binary("00000000000000000000000000001011");
