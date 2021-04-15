const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act
      const str=new Word("test");


      //Assert
      expect(str).to.have.property('word');
      // expect.fail('Remove this expect.fail and replace it with your test');
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
      const str=new Word("test");


      //Assert
      expect(str.word).to.equal("test")
        // expect.fail('Remove this expect.fail and replace it with your test');
    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      const str=new Word("test");
      let res="tst";

      //Act
      let actual=str.removeVowels();

      //Assert
      expect(actual).to.equal(res);
      //expect.fail('Remove this expect.fail and replace it with your test');
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange
    const str=new Word("test");
    let res="e"
    //Act
    let actual=str.removeConsonants();
    //Assert
    expect(actual).to.equal(res);
     //expect.fail('Remove this expect.fail and replace it with your test');
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    const str=new Word("test");
    let res="esttay"
    //Act
    let actual=str.pigLatin();

    //Assert
    expect(actual).to.equal(res);
     //expect.fail('Remove this expect.fail and replace it with your test');

  })
})
