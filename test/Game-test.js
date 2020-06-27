const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let cards, deck, round, game;
  beforeEach(function () {
    game = new Game();
    cards = game.createCards(prototypeQuestions); 
    deck = new Deck(cards);
    // turn = new Turn(guess, cards[0]);
    round = new Round(deck);
    game.start();
  });

  it('should keep track of current round', function() {
    expect(game.currentRound).to.deep.equal(round);
  });

  it('should create and put cards in deck, and create new round', function() {
    expect(game.currentRound.deck).to.deep.equal(round.deck);
  });

});