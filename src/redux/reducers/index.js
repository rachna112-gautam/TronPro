import { ACCOUNT_UPDATE, CONTRACT_LOADED, ON_MY_DATA_LOADED } from "../constants/action-types";



const initialState = {
  account: null,
  blockchainClient: null,
  myData:{}
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case ACCOUNT_UPDATE:
      return Object.assign({}, state, {
        account: action.payload
      });

    case CONTRACT_LOADED:
      return Object.assign({}, state, {
        contract: action.payload
      });



    case ON_MY_DATA_LOADED:
      console.log("accccccc",action)
      return Object.assign({}, state, {
        myData: action.payload
      });
      default: {
          return state;
      }


  }

};

export default rootReducer;