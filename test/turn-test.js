const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card, turn1, turn2;
  beforeEach(function () {
    card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    turn1 = new Turn('Li', card);
    turn2 = new Turn('Leigh', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function() {
    expect(turn1.returnGuess()).to.equal( 'Li');
    expect(turn2.returnGuess()).to.equal('Leigh');
  }); 

  it('should return the card', function () {
    expect(turn1.returnCard()).to.equal(card);
    expect(turn2.returnCard()).to.equal(card);
  }); 

  it('should return whether user guessed correctly', function () {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  }); 

  it('should give feedback if guess is correct or not', function () {
    expect(turn1.giveFeedback()).to.equal( 'incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  }); 

});