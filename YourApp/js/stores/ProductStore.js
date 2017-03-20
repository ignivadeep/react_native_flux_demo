import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';
import _ from 'underscore';
import AddStore  from './AddStore';
import {EventEmitter} from 'events';

var count = 0;

function mul() {
  count = AddStore.getCount()*5 ;
}

function div() {
  count = AddStore.getCount()*5 ;
}

class Productstore extends EventEmitter {

  getProductData() {
    return count.toFixed(2);
  }
 
  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
};

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


const ProductStore = new Productstore;
export default ProductStore;
