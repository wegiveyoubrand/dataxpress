let number = 8,
  n = 2,
  initialResult = number,
  i;
console.log(initialResult);

const squareNumber = function (initialResult) {
  return initialResult;
};

function toThePowerOf(n) {
  for (let i = 0; i < n - 1; i++) {
    initialResult *= squareNumber(number);
    console.log(initialResult);
  }
  return;
}

const result = toThePowerOf(n);

console.log(result(n));
