describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5, 4, 8, 9, 7, 3])).toEqual([3, 4, 5, 7, 8, 9]);
  });
});
