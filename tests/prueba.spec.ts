import 'mocha'
import { expect } from 'chai'
import { add } from "../src/prueba"

describe("add functions tests", () => {
  it("add(14, 4) returns 18", () => {
    expect(add(14,4)).to.equal(18);
  });
});