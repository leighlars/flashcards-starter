# Flashcards
Mod 2 Solo Project

### Developer
- [Leigh Larson](https://github.com/leighlars)

### Project Links
- [Repo](https://github.com/leighlars/flashcards-starter)
- [Project Board](https://github.com/leighlars/flashcards-starter/projects/1)
- [Project Spec](https://frontend.turing.io/projects/flash-cards.html)

## Abstract 
In this project, I will write a program to simulate a set of flash cards through the command line! A user will be able to see the questions, take guesses, and see a final score at the end of the round. This project will demonstrate my understanding and implementation of ES6 classes, TDD and testing suites, contribution of code to a partially-constructed OOP app, ability to write modular, reusable code that follows SRP, and last but certainly not least, ability to follow spec/comp to complete a functional app. 

## Functionality Showcase 
Insert gif here. 

## Setup and Gameplay

- On the top right corner of this page, click the **Fork** button.
- Clone down the forked repo (from your GitHub). Since you don't want to name your project "flashcards-starter", you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

Running `node index.js` from the root of your project should result in the following message being displayed in your terminal: 

```bash
Node server running on port 3000
```

To start the game in the terminal, run:

```bash
node index.js
```

When the game is functioning appropriately, the user will be prompted for each question, have the opportunity to select an answer, and will be given feedback. The user will be able to play through the entire deck of cards, and see their correct answer score and time at the end. If the user fails to score 90% or above, the user is encouraged to play again. 

User may use the arrow keys or type the number of the corresponding answer to answer each question. 
Hit 'enter' to move to the next question. 

To exit the game before the end of the game, hit control+c. Otherwise, the game will end automatically, and the user will need to type `node index.js` to start a new game. 

## Schedule 
This project is assigned on Monday, June 30th, and due on July 2nd. I aim to complete the project in about 2 days. I will seek insight from my mentor or MDN when I get in a bind or if I just want a fresh way to code. 

- I spent day one writing each test in it's respective file, and immediately failing it, then working on the implementation code to solve it. I got through
the first two iterations pretty easily, but needed to slow down on the game file. 
- After a good night's rest, I completed the game file, played a few games, saw that it was functional, and then decided to play around in extensions: 
- I added a timer method that was invoked / interpolated in the endRound() message. 
- I took some creative liberties in the endRound message-- if the user scored at least a 90, the console would print an encouraging word in addition to the spec's requirement. Otherwise, the message encourages the user to play again. The game then ends, and the user can start again by typing `node index.js` in the terminal. 

## Reflection
This project was a lot of fun to create. I was able to move through the first two iterations pretty quickly, pausing to refactor my code. I was glad to find the beforeEach method to clean up my test suite instead of having repetitive lines of code for each test. The game-test was a little tricky, but that was mainly me not slowing down to read the files appended to the top of the game file. All in all, I really appreciated seeing how far I have come in my learning. I am grateful for my mentor, Ryan Barnett, for taking a second look at the code and pointing out ways I could refactor or force me to talk out my pseudocode so I could discover my own logic holes. 