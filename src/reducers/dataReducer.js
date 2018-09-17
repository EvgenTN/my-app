import * as actionType from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionType.INIT_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case actionType.DELETE_USER:
    console.log('reducer state', state);
    const result = state['users'].filter((item, id) => {return id !== action.payload})
      return {
        ...state,
        users: result,
      }
    case actionType.SHOW_PHRASE:
    // console.log('phrase id', action.payload);
    console.log('state[users]', state.users);
    const res = [
      ...state.users,
    ];
    res[action.payload].isPhrase = res[action.payload].isPhrase ? false : true;
    return {
      ...state,
      users: res,
    }  
    case actionType.ADD_USER:
    const addUser = [
      ...state,
    ]
    addUser.push('action.payload');
    return {
      ...state,
      users: addUser,
    }
    default:
      return state;
  }
}