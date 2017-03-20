

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var _ = require('underscore');

var count = 5;

function mul() {
  count*=5 ;
}

function div() {
  count/=5;
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

  getProductData: function () {
    return count.toFixed(2);
  },
 
  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function (payload) {

  var action = payload.action;
  var text;
  switch (action.actionType) {
    case Constants.INC_DATA:
      mul();
      break;
    case Constants.DEC_DATA:
      div();
      break;
    default:
      return true;
  }
  ProductStore.emitChange();
  return true;
});

module.exports = ProductStore;
