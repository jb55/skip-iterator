'use strict';

let nats = require('naturals');
let skip = require('./');
let expect = require('expect.js');

describe('skip-iterator', function(){
  it('works for generators', function(){
    let gen = skip(nats(5), 5)
    expect(gen.next().value).to.be(10);
  });

  it('doesnt works for generator functions', function(){
    expect(function(){
      let gen = skip(nats, 5)
      expect(gen.next().value).to.be(5);
    }).to.throwException(function(e){
      expect(e).to.be.a(TypeError);
    });
  });

  it('skipping 0 skips nothing', function(){
    let gen = skip(nats(1), 0)
    expect(gen.next().value).to.be(1);
  });
});
