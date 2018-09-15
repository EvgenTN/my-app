import * as actionTypes from './actionTypes';

export const initUsers = (users) => {
  return {
    type: actionTypes.INIT_USERS,
    payload: users,
  }
};

export const deleteUser = (id) => {
  return {
    type: actionTypes.DELETE_USER,
    payload: id,
  }
}

export const showPhrase = (id) => {
  return {
    type: actionTypes.SHOW_PHRASE,
    payload: id,
  }
}

