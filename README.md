# dac209-twine-game-src

# Feature List

UI layout
 * Twine viewport vertical scroll 
 * drawing area
 * Ink selector
 * tool selector (stamp or otherwise)
  * stamps
  * date/time stamps

Data layer
 * drawing
  * color information
 * ticket
  * has a drawing (maybe)
  * has a datetime and location for departure
  * has a datetime and location for return

Mini Game (drawing)
 * Twine tree lets you navigate through their dialogue to get information.
 * Twine link for next person will load a new person to talk to. (hidden)
 * Tell the UI to start drawing on a ticket background, data layer tracks information
 * (the ui things for drawing happen)
 * ui button appears for give to customer
  * clicking this gives them clears the canvas
  * then it checks if you got it correct and make twine transition to either the exit or the wrong dialoge 

 * lockout the minigame things on a boolean with some overlay stuffs (protect it with a global game state)

Mini Game (Feelings event)
 * template buttons that tell the data layer to give you some ink, then use window.story.show to move on
 * choose n of them using a js function (it can return the passage names ig)
 * modify that to choose them more based on the players mood 

Feelings
 * in the data layer, the player has variables for the different mood describers
 * player starts with low levels in everything (or maybe a bunch of blue and red)
 * when you gain ink, also gain points in that color (these are permanent)
 * use the levels to determine what you can choose from in feelings events, maybe lock you out of certain dialogue

I made a stamp!
 * button in twine calls a datalayer function that will enable that one/add it to a list or something

Custom stamps
 * use the same canvas spot but with a differnt size, single carving tool to modify
 * store the bmp data somewhere in the data layer and load it like any other texture

Twine navigation through dialogue.
Twine element hidden until the user clicks a ui button (give drawing)



#### Resources

https://videlais.github.io/snowman/2/events/passage_events/
