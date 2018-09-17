describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5, 4, 8, 9, 7, 3])).toEqual([[5, 4, 8], [9, 7, 3]]);
  });
});
describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});
