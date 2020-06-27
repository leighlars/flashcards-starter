class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.guess === this.card.correctAnswer ? 'correct!' : 'incorrect!';
  }

}

// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s 
// guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
// based on whether the guess is correct or not.
module.exports = Turn;