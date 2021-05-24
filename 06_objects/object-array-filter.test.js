import filter from './object-array-filter';

describe('Filter array of objects by object property value', () => {
  it('should just work as expected', () => {
    const array = [
      { id: 1, name: 'Name 1' },
      { id: 2, name: 'Name 2' },
      { id: 3, name: 'Name 3' },
      { id: 22, name: 'Name 2' },
    ];
    const expected = [array[1], array[3]];
    const filtered = filter(array, 'name', 'Name 2');
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });
});
