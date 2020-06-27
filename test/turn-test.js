const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

    // returnGuess: method that returns the guess
  it('should return a guess', function() {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);
  
    expect(turn.returnGuess()).to.equal( 'Li');
  }); 

  // returnCard: method that returns the Card
  it('should return the card', function () {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);

    expect(turn.returnCard()).to.equal(card);
  }); 

  // evaluateGuess: method that returns a boolean indicating if the user’s 
  // guess matches the correct answer on the card
  it('should return whether user guessed correctly', function () {
    const card1 = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn1 = new Turn('Li', card1);

    expect(turn1.evaluateGuess()).to.equal(false);

    const card2 = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn2 = new Turn('Leigh', card2);

    expect(turn2.evaluateGuess()).to.equal(true);
  }); 

  // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
  // based on whether the guess is correct or not.
  it('should give feedback if guess is correct or not', function () {
    const card1 = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn1 = new Turn('Li', card1);

    expect(turn1.giveFeedback()).to.equal( 'incorrect!');

    const card2 = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn2 = new Turn('Leigh', card2);

    expect(turn2.giveFeedback()).to.equal('correct!');
  }); 

});