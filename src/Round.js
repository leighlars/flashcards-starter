const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
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
  
  endRound() {
    if (this.calculatePercentCorrect >= 90) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect() || 0}% of the questions correctly!`);
    } else {
      console.log(`** Round over! ** 
      You answered only ${this.calculatePercentCorrect() || 0}% of the questions correctly. 
      You need to score 90% to pass! Play again.`);
    }
  }

}

module.exports = Round;