const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const { assert } = require('chai');

describe('Deck', function () {

  it('should be a function', function () {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function () {
    const deck = new Deck();
    
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should return number of cards in deck', function () {
    const deck = new Deck();

    let numCards = countCards();

    assert.equal(numCards, )
  });


});