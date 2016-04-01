'use strict';

var Node = require('.');

module.exports = Node.define({
  type: 'DROP',

  constructor: function(table) {
    Node.call(this);
    this.add(table);
  }
});
