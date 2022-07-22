function makeAdder(x) {
  return function (y) {
    return x * y;
  };
}

var mult5 = makeAdder(5);
var mult10 = makeAdder(10);

console.log(add5(2)); // 10
console.log(add10(3)); // 30
