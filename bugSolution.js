function foo(a) {
  if (typeof a !== 'number') {
    return NaN; // Handle non-numeric input
  }
  return a + 10;
}

function bar(b) {
  if (typeof b !== 'number') {
      return NaN; // Handle non-numeric input
  }
  return foo(b) * 2;
}

console.log(bar(5)); // Output: 30
console.log(bar('hello')); // Output: NaN