const { myLetVariable, myConstVariable, myArray } = require('./script');

describe('Coding 3 Autograde', () => {
  test('myLetVariable exists and is mutable (reassignable)', () => {
    expect(() => {
      myLetVariable = 'changed'; // This should not throw an error
    })
  });

  test('myConstVariable exists and is not mutable (reassignable)', () => {
    expect(() => {
      myConstVariable = 'changed'; // This should throw an error
    }).toThrow();
  });

  test('myArray should contain 3 different data types', () => {
    const uniqueTypes = new Set(myArray.map(item => typeof item)).size;
    expect(uniqueTypes).toBe(3);
  });

  test('myArray should 4 elements after manipulation', () => {
    expect(myArray.length).toBe(4);
  });

  test(`myArray's second element should be 345`, () => {
    expect(myArray[1]).toBe(345);
  });


});
