import 'mocha'
import { expect } from 'chai'
import { NumericSearchableCollection } from '../../src/modificacion/numericSearchableCollectionSearchableCollection'

describe('NumericSearchableCollection tests', () => {
  it('should returns a number', () => {
    const collection = new NumericSearchableCollection([1,2,3,4]);
    expect(collection.getItem(2)).to.be.equal(2);
  });

  it('should add a number in the array', () => {
    const collection = new NumericSearchableCollection([1,2,3,4]);
    expect(collection.addItem(5)).to.be.equal([1,2,3,4,5]);
  });
});