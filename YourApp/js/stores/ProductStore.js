import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import _ from 'underscore';
import AddStore  from './AddStore';

var EventEmitter = require('events').EventEmitter;
var count = 0;

function mul() {
  count = AddStore.getCount()*5 ;
}

function div() {
  count = AddStore.getCount()*5 ;
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
