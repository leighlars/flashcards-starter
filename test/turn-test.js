const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

const Turn = require('../src/Turn');
const { assert } = require('chai');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return a guess', function() {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);
      
    let returnedGuess = turn.returnGuess();

    assert.equal(returnedGuess, 'Li');
  }); 

  it('should return the card', function () {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);

    let returnedCard = turn.returnCard();
    assert.equal(returnedCard, card);
  }); 

  it('should return whether user guessed correctly', function () {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);

    let evaluation = turn.evaluateGuess();

    assert.equal(evaluation, false);
  }); 

  it('should give feedback if guess is correct or not', function () {
    const card = new Card(1, 'What is my name?', ['Leigh', 'Lee', 'Li'], 'Leigh');
    const turn = new Turn('Li', card);

    let feedback =  turn.giveFeedback();

    assert.equal(feedback, 'incorrect!');
  }); 

  // returnGuess: method that returns the guess
  // returnCard: method that returns the Card
  // evaluateGuess: method that returns a boolean indicating if the user’s 
  // guess matches the correct answer on the card
  // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
  // based on whether the guess is correct or not.


});