const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
  let card1, card2, card3, deck, round;
  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be initialized with a deck', function () {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return current card being played', function() {   
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turn count', function () {
    expect(round.turns).to.equal(0);

    round.takeTurn("pug");

    expect(round.turns).to.equal(1);
  });

  it('current card changes to next card in array', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn("pug");

    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn("pug");

    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should return correct when guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
  });

  it('should return incorrect when guess is incorrect', function () {
    expect(round.takeTurn('pug')).to.equal('incorrect!');
  });

  it('should add incorrect guess id to incorrectGuesses array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn('pug');

    expect(round.incorrectGuesses).to.deep.equal([1]);

    round.takeTurn('spleen');

    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should return the percentage of correct guesses', function() {
    round.takeTurn('sea otter');

    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should print end game message and percent correct to console', function() {
    round.takeTurn('sea otter');

    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly. Great job!');

    // round.takeTurn('gallbladder');

    // expect(round.endRound()).to.equal('** Round over! ** You answered only 50% of the questions correctly. You need to score 90% to pass. Play again.');
  });

});