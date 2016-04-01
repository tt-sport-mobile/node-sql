'use strict';

var Node = require('.');

module.exports = Node.define({
  type: 'CREATE',

  constructor: function(isTemporary) {
    Node.call(this);

    this.options = { isTemporary: isTemporary};
  },

});
