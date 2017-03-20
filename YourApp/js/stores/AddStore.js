import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import _ from 'underscore';
import {EventEmitter} from 'events';
var count = 0;

function add() {
  count++;
}

function sub() {
  count--;
}

class Addstore extends EventEmitter {

  getCount () {
    return count;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener (callback) {
    this.on('change', callback);
  }

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }
};


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

const AddStore = new Addstore;
export default AddStore;