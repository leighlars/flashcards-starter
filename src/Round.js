const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

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
      console.log(`** Round over! ** 
      You answered ${this.calculatePercentCorrect() || 0}% of the questions correctly.
      Great job!`);
    } else {
      console.log(`** Round over! ** 
      You answered only ${this.calculatePercentCorrect() || 0}% of the questions correctly. 
      You need to score 90% to pass! Play again.`);
      // how do i make the game start again?
    }
  }

  showReportCard() {
    let incorrectCards = prototypeQuestions.filter(card => {
      this.incorrectGuesses.find(guess => { 
        return guess === card.id
      });
      let correctCards = incorrectCards.map(card => {
        let obj = {};
        obj.question = card.question;
        obj.answer = card.correctAnswer;
        return obj;
      })
    });
    console.log(`Report Card! Here are the cards you need to study: ${correctCards}`);

    // loop through prototypeQuestions 
    // keep (filter) prototypeQuestions[i].id === this.incorrectGuesses.id (find?)
    // map over the new array and return an array of objects of each of the cards' question and correct answer
    // console log Report Card! Here are the cards you need to study: the array
    // is this the appropriate way to do this?
  }
}

module.exports = Round;