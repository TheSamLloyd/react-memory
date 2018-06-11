# React-Memory
This is a "game" built with React (using create-react-app for node.js) based on testing one's memory. There are 12 provided images (iconic albums from the 80s), and the goal is to click each one without repeating any of them. With each click, your score will update -- if it's a previously-unclicked album, it will increment by one. If you have previously clicked it, your score will return to 0. You can see your "best" score in the info bar as well. 

## Building your own version
The easiest way, frankly, is just to fork the code and change the images in `/public/images` to images of your choosing. There are some stylesheets in `/src/components/Tile.css` and `/src/App.css`, as well as `/src/index.css`. Most of the actual colors are defined in `/src/App.js` as Materialize classes.

## Basic logic
`App.js` generates a shuffled list of the integers from 0 to 12 and uses that to determine the order in which to display the album covers. On any click, it reshuffles that list and redisplays the albums in a new order (not to be confused with New Order, whose album "Power, Corruption, and Lies" makes an appearance.)
`App.js` passes the `onClick` function down thru `TileGrid` to each `Tile` component so that on a click, the `Tile` can pass its `id` back to the `App` proper so it can handle it. From there, it's a pretty simple matter of checking whether the returned id is already in the list of ids that have been clicked.

## Utilizied tech
+ node 
+ React
+ create-react-app
+ yarn
+ react-dom

### Covering my bases
The use of these album covers is fair use as it is for a non-proprietary, educational purpose. Prince, if your estate is listening, please don't sue. 