const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.start = Date.now();
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    let turn = new Turn(guess, card);
    this.turns++;
    this.deck.shift();
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }
  
  timer() {
    let totalSeconds = Math.floor((Date.now() - this.start) / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - (minutes * 60);
    return `In ${minutes} minutes and ${seconds} seconds,`;
  }

  endRound() {
    if (this.calculatePercentCorrect >= 90) {
      console.log(`** Round over! ** 
      ${this.timer()} you answered ${this.calculatePercentCorrect() || 0}% of the questions correctly.
      Great job!`);
      return process.exit();
    } else {
      console.log(`** Round over! ** 
      ${this.timer()} you answered only ${this.calculatePercentCorrect() || 0}% of the questions correctly. 
      You need to score 90% to pass! Play again.`);
      return process.exit();
    }
  }

}

module.exports = Round;