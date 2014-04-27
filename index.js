'use strict';

module.exports = skipGenerator;

function* skipGenerator(gen, n) {
  for (let x of gen) {
    if (n === 0) yield x;
    else --n;
  }
}
