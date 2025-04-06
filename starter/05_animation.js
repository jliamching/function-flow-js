// TODO: Write a function 'move' that simulates a rocket moving back and forth in the console
// TODO: Use 'console.clear()', 'console.log()', and basic logic with position

let x = 0;
let speed = 1;

function move() {
  console.clear();
  console.log(" ".repeat(x) + ">===>");
  x += speed;
  if (x > 30 || x < 0) speed = -speed;
}

move()

module.exports = { move };
