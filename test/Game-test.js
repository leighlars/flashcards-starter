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

  it('should be a function', function () {
    expect(Game).to.be.a("function");
  });

  it('should be an instance of Game', function () {
    expect(game).to.be.an.instanceof(Game);
  });
  
  it('should initialize current round as null', function() {
    expect(game.currentRound).to.equal(null);
  });

  it('should create and put cards in deck and create new round', function() {
    expect(game.start());

    expect(game.currentRound.deck.length).to.equal(30);
  });

});