# Magic Words Game

## Description

Test your **Harry Potter** knowledge! Match quotes from Harry Potter books and movies with the right character by clicking on the character before the quote hits the cauldron. Each correct answer earns you one point, each incorrect answers results in **GAME OVER**. Per game 5 random quotes will come down.

## MVP (DOM - CANVAS)

* Game has 4 characters: Harry, Ron, Hermione and Dumbledore
* Quotes said by one of the characters respectively come falling down the screen
* Quotes have to matched with characters by clicking on the character
* Quote disappears when matched
* 5 correctly matched quotes will win the game  
* Wrong answer: GAME OVER
* There is a cauldron positioned right underneath the falling quote
* The quote hitting the cauldron results in GAME OVER

## Backlog

* Create both a light and dark version (different characters)
* Choose Hogwarts house in Splash screen and change banner accordingly
* Add lives
* Move quote to character when matched correctly

## Data Structure

### main.js

* splashScreen () {}
* gameScreen () {}

### game.js

* Game () {}
* startLoop () {}
* quoteFall () {}
* checkCollisions () {}
* clearCanvas () {}
* updateCanvas () {}
* drawCanvas () {}
* GameOver () {}

### quotes.js

* quotes () { this.x; this.y; this.direction; this.size }
* randomQuotes () {}
* draw () {}
* pickRandomQuote () {}
* move () {}
* cauldronCollision () {}

### character.js

* Link characters to quotes

## States & States Transitions

There are three 3 stages and 4 screens to the game:
* splashScreen
* gameScreen
* winScreen
* gameOverScreen

The winScreen only shows when the game has been won and the gameOverScreen shows when the game has been lost.

## Tasks

* main - buildDom
* main - buildSplashScreen
* main - addEventListener
* main - buildGameScreen
* main - buildGameOverScreen
* main - buildWinOverScreen
* game - startLoop
* game - buildCanvas
* game - updateCanvas
* game - drawCanvas
* quotes - draw
* quotes - randomQuote
* quotes - move
* game - addQuote
* characters - matchQuote
* game - checkCauldronCollision
* game - gameOver
* game - gameWon
* game - addEventListener

## Links

### Trello

[Trello board](https://trello.com/b/U0Bc82Rr/magic-words-game)



