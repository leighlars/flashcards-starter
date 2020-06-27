class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  // returnGuess: method that returns the guess
  returnGuess() {
    return this.guess;
  }

  // returnCard: method that returns the Card
  returnCard() {
    return this.card;
  }

  // evaluateGuess: method that returns a boolean indicating if the user’s 
  // guess matches the correct answer on the card
  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
  // based on whether the guess is correct or not.
  giveFeedback() {
    return this.guess === this.card.correctAnswer ? 'correct!' : 'incorrect!';
  }

}

module.exports = Turn;