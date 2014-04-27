'use strict';

module.exports = skipIterator;

function* skipIterator(gen, n) {
  for (let x of gen) {
    if (n === 0) yield x;
    else --n;
  }
}
