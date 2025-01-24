function foo(a) {
  if (a === null) {
    return 0; // Handle null
  } else if (a === undefined) {
    return 0; // Handle undefined
  } else if (typeof a === 'string' || Array.isArray(a)) {
    return a.length;
  } else {
    return 0; // Or throw an error: throw new Error('Invalid input type');
  }
}