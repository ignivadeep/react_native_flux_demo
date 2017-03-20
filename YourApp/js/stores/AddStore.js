import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import _ from 'underscore';

var EventEmitter = require('events').EventEmitter;
var count = 0;

function add() {
  count++;
}

function sub() {
  count--;
}

var AddStore = _.extend({}, EventEmitter.prototype, {

  getCount: function () {
    return count;
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
  switch (action.actionType) {
    case Constants.INC_DATA:
      add();
      break;
    case Constants.DEC_DATA:
      sub();
      break;

    default:
      return true;
  }
  AddStore.emitChange();
  return true;
});

module.exports = AddStore;
