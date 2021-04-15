const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    let input = [1, 2, 3];
    let res = [1, 2, 3, 3, 2, 1]
    //Act
    let actual = mirrorArray(input)
    //Assert
    expect(actual).to.eql(res)
    //expect.fail('Remove this expect.fail and replace it with your test');
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    // let res=()=>{};
    //Act
    let acutal = hiddenCounter();
    let res2 = acutal();
    //Assert
    expect(res2).to.equal(1);
    // expect.fail('Remove this expect.fail and replace it with your test');
  })
})

//3. myMap
describe('myMap', function () {
  it("should function like the built in Array#map", function () {
    //Arrange
    let input = [1, 2, 3]
    let res = input.map((el) => el)

    //Act
    let actual = myMap(input, res)
    //Assert
    expect(actual).to.deep.equal(input)

    //expect.fail('Remove this expect.fail and replace it with your test');
  });

  it("should not call the built in Array#map", function () {
    //Arrange
    let mapSpy = chai.spy.on(Array.prototype, "map")
    //Act

    //Assert
    expect(mapSpy).to.have.not.been.called()
    //expect.fail('Remove this expect.fail and replace it with your test');
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    //Arrange
    let input=[1,2,3,4]
    let res=2.5;
    //Act
    let actual=avgValue(input);
    //Assert
    expect(actual).to.equal(res);
    //expect.fail('Remove this expect.fail and replace it with your test');

  })
})
