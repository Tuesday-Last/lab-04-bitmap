'use strict';

// const fs = require('fs');
// const app = require('./../lib/transformer');
const expect = require('chai').expect;
// const app = require('./../lib/app');
// const img = require('/../img/bitmap1.bmp')
// const imgData = new App(img);
// const AllThatData = require('../lib/app');
// const bitmap = __dirname +'/img/bitmap1.bmp';
// const coolImage = new AllThatData(bitmap);
// const transformer = require('./lib/transformer.js');
const transform = require('../lib/transformer.js');

describe('test transformer module', function(){
  describe('test const AllThatData', function(){
    // var palette;
    // console.log('HERE', typeof transformer(palette));
    it('should create ', function(done){
      console.log('HIT', typeof transform(palette));
      var palette;
      expect(typeof transform(palette)).to.equal('number');
      done();

    });
  });
});
