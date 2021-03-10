import { ACCOUNT_UPDATE ,CONTRACT_LOADED,ON_MY_DATA_LOADED} from "../constants/action-types";



export function accountUpdate(payload) {
    return { type: ACCOUNT_UPDATE, payload }
  };

  



export function onContractLoaded(payload) {
  return { type: CONTRACT_LOADED, payload }
};

export function onMyDataLoaded(payload) {
  return { type: ON_MY_DATA_LOADED, payload }
};