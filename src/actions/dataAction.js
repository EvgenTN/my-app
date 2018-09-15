import * as actionTypes from './actionTypes';

export const initUsers = (users) => {
  return {
    type: actionTypes.INIT_USERS,
    payload: users,
  }
}