import filter from './filter-black-list';

describe('Black list strings filter function', () => {
  it('should just work as expected', () => {
    expect(filter(['1', '2', '3', '4', '5'], ['3', '4']).sort()).toEqual(['1', '2', '5']);
    expect(filter(['1', '2', '3', '4', '5'], ['0', '3', '4']).sort()).toEqual(['1', '2', '5']);
    expect(filter(['1', '2', '3', '4', '5'], ['6', '7', '8']).sort()).toEqual(['1', '2', '3', '4', '5']);
    expect(filter([], ['6', '7', '8']).sort()).toEqual([]);
    expect(filter(['6', '7', '8'], ['6', '7', '8']).sort()).toEqual([]);
    expect(filter(['6', '7', '8'], []).sort()).toEqual(['6', '7', '8']);
  });
});
