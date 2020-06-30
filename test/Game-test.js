const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
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
    round = new Round(deck);
  });
  
  it('should initialize current round as null', function() {
    expect(game.currentRound).to.equal(null);
  });


});