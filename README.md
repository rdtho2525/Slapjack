# Slapjack

## Introduction

_SlapJack!_ is a fun card game for kids and adults of all ages! All you'll need to get started are __two players__ and a __computer keyboard__.

### _Let's go!_

## Rules:
Each player alternates dealing a single card to a center pile.  That pile can be collected by _slapping_ said pile in one of the four acceptable scenarios:
  + _SlapJack_ - A jack appears on the top of the center pile.
  + _Double_ - Two cards of the same value appear back-to-back.
  + _Sandwich_ - Two cards of the same value are split by a single card of a different value.
  + _Wild_ - A wild card may be used to satisfy any of the three scenarios above.

  _If a player mistakenly slaps the pile outside of these four scenarios, they must grant a card to their opponent_

The point of the game is to collect all the cards in the deck. If a player is out of cards,  _SlapJack_ becomes the only "slappable" scenario.  If the player without cards slaps first, they collect the pile and re-enter the game. However, if that player isn't quick enough or they slap on a scenario other than _SlapJack_, the other player wins!

## How to play:

__Controls:__

 __Player 1: press _'q'_ to deal or _'f'_ to slap__

 __Player 2: press _'p'_ to deal or  _'j'_ to slap__

1. On the opening page, you'll find two hands for each player. Player 1 is on the user's left highlighted in blue and Player 2 is on the right highlighted in brown.  

  To get started, _click the center button to deal the cards to each player evenly_.
  ![initate-game](assets/README-94a96b03.png)

2. Player 1 goes first.  Alternating turns, players will deal their top card to the center pile using their keyboard controls.  
  ![cards-are-dealt](assets/README-5f3787e3.png)

3. As the two players cycle through their decks, the center card will be highlighted the same color as the player who played it.
  ![mid-gameplay](assets/README-85c4772f.png)

4. When one of the four scenarios appears, think fast: it's time to _slap_!
  ![double-event](assets/README-3c883630.png)

5. Oh no! It looks like Player 2 is out of cards.
  ![empty-hand](assets/README-c42d5456.png)

6. Remember: only a _SlapJack_ can win the game for Player 1 or keep Player 2 alive.
  ![invalid-slap](assets/README-7eb87297.png)

7. Player 1 was just a little two fast this time!  Don't fret, Player 2 - the game resets automatically so you can play again!
  ![end-game](assets/README-d1e86d9c.png)

_*Deployed set is not available at this time_

## Goals
+ Demonstrate growth with structuring and styling websites using HTML and CSS.
+ Develop and practice adhering to DRY and SRP code standards.
+ Strengthen critical thinking skills.
+ Practice utilizing localStorage to retain and retreive data.

## Technologies
+ HTML
+ CSS
+ JavaScript

## Code Architecture
![flowchart](assets/README-db80617c.png)

## Challenges and Triumphs
+ With this being the most logically complex project to date, it wasn't long before the codebase became entangled in a way that yielded undesired outcomes (i.e. winning the game on a sandwich or the notification didn't match the action, etc.).  To fix this, I separated some of my methods more to carry out even more specific actions so as to not contaminate other data references. Encountering this challenge taught me that SRP is not only important for the sake of developer empathy and reading code, but also for overall functionality of the application.

## Local install instructions
+ Clone this repo
+ CD into the Slapjack directory
+ Open index.html in your browser

## Contributors
+ Reggie Thompson, https://github.com/rdtho2525

Happy Slapping!
