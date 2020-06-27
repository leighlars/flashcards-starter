# Flashcards
Mod 2 Solo Project

### Developer
- [Leigh Larson](https://github.com/leighlars)

### Project Links
- [Repo](https://github.com/leighlars/flashcards-starter)
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

When the game is functioning appropriately, the user will be prompted for each question, have the opportunity to select an answer, and will be given feedback. The user will be able to play through the entire deck of cards, and see their correct answer score at the end. 

User may use the arrow keys or type the number to the corresponding answer to answer each question. Hit 'enter' to move to the next question. 

To exit the game at any time, hit control+C twice.



## Schedule 
This project is assigned on Monday, June 30th, and due on July 2nd. I aim to complete the project in about 2 days. I will seek insight from my mentor or MDN when I get in a bind or if I just want a fresh way to code. 

## Reflection
This project was a lot of fun to create. I was able to move through the first two iterations pretty quickly, pausing to refactor my code. I was glad to find the beforeEach method to clean up my test suite instead of having repetitive lines of code for each test. The game-test was a little tricky, but that was mainly me not slowing down to read the files appended to the top of the game file. All in all, I really appreciated seeing how far I have come in my learning. I am grateful for my mentor, Ryan Barnett, for taking a second look at the code and pointing out ways I could refactor or force me to talk out my pseudocode so I could discover my own logic holes. 