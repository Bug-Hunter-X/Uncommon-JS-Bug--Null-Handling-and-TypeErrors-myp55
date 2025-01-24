function foo(a) {
  if (a == null) {
    return 0; // bug: should handle undefined and null separately
  }
  return a.length; // bug: this will cause an error if a is not an array or string
}