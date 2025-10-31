function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Invalid input');
  return a + b;
}

test('adds 2 + 3 correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

test('throws error for invalid input', () => {
  expect(() => sum('x', 3)).toThrow('Invalid input');
});
