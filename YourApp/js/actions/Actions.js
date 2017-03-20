var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  incCount: function () {
    AppDispatcher.handleAction({
      actionType: Constants.INC_DATA
    })
  },

  decCount: function () {
    AppDispatcher.handleAction({
      actionType: Constants.DEC_DATA
    })
  },

};

module.exports = Actions;
