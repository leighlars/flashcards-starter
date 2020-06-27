class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.calculatePercentCorrect = 0;
  }

  returnCurrentCard() {
    // returns current card being played
    return this.deck.shift();
  }

  // takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  takeTurn(guess) {
    // When a guess is made, a new Turn instance is created.
    let turn = new turn(guess, card);
    // The turns count is updated, regardless of whether the guess is correct or incorrect
    this.turns++;
    // The next card becomes current card
    this.returnCurrentCard();
    // Guess is evaluated / recorded.Incorrect guesses will be stored(via the id) in an array of incorrectGuesses
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(card.id);
    };
    // Feedback is returned regarding whether the guess is incorrect or correct
    turn.giveFeedback();
  }

  calculatePercentCorrect() {
    // method that calculates and returns the percentage of correct guesses
   return (this.incorrectGuesses.length / this.turns) * 100;
  }
  
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect}% of the questions correctly!`;
  }

}

module.exports = Round;