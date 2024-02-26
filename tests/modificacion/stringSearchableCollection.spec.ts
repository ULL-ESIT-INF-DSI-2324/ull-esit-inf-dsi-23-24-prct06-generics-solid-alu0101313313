import 'mocha'
import { expect } from 'chai'
import { StringSearchableCollection } from '../../src/modificacion/stringSearchableCollectionSearchableCollection'

describe('StringSearchableCollection tests', () => {
  it('should returns a number', () => {
    const collection = new StringSearchableCollection(['4','3','2','1']);
    expect(collection.getItem('2')).to.be.equal('3');
  });

  it('should add a number in the array', () => {
    const collection = new StringSearchableCollection(['1','2','3','4']);
    expect(collection.addItem('5')).to.be.equal(['1','2','3','4','5']);
  });
});