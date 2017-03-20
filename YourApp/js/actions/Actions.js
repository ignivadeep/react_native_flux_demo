import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';

let Actions = {

  incCount() {
    AppDispatcher.handleAction({
      actionType: Constants.INC_DATA
    })
  },

  decCount() {
    AppDispatcher.handleAction({
      actionType: Constants.DEC_DATA
    })
  },

};

module.exports = Actions;
