const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null;
  }

  createCards(cardData){
    return cardData.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
  }

  start = () => {
    const cards =  this.createCards(prototypeQuestions);
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage = (deck) => {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion = (round) => {
    util.main(round);
  }
}

module.exports = Game;