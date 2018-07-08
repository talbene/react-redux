import { combineReducers } from 'redux';


export const geod = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_GEOD':
    console.log('action.geod',action.geod)
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  geod,
});