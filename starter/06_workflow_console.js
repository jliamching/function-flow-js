// TODO: Create a function 'animateSteps' that logs one step from a list every second
// TODO: Use 'setTimeout' or 'setInterval' to log the steps in order
let index = 0

const steps = [
  "Step 1: Create empty cart",
  "Step 2: Add item to cart",
  "Step 3: Calculate total",
  "Step 4: Apply discount",
  "Step 5: Checkout"
];

function animateSteps() {
  if (index <= steps.length - 1){
    console.log(steps[index])
    index ++
  }
}

setInterval(animateSteps, 1000)

module.exports = { animateSteps };
