// TODO: Write a function 'applyDiscount' that takes a price and a callback function
// TODO: The callback should apply a discount to the price
// TODO: Also create a function 'tenPercentOff' that returns 90% of a given value

function applyDiscount(price, discountFn) {
  return discountFn(price)
}

function tenPercentOff(amount) {
  amount - (amount * 0.1)
  return amount
}

module.exports = { applyDiscount, tenPercentOff };
