#!/usr/bin/env node

var fs = require('fs');

var primeNumberArray = [2];

var isPrimeNumber = function(n) {
  for (var i=0; i<primeNumberArray.length; i++) {
    if (n%primeNumberArray[i] === 0) {
      return false;
    }
  }
  return true;
};

var maxNumber = 1000;

for (var i=3; i<maxNumber; i++) {
  if (isPrimeNumber(i)) {
    primeNumberArray.push(i);
  }
  if (primeNumberArray.length === 100) {
    break;
  }
}

fs.writeFileSync('prime.csv', primeNumberArray.join());
