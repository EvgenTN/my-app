import * as actionType from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionType.INIT_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
}