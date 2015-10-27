import * as types from '../constants/ActionTypes';

const initialState = { 
  current_planet: null,
  dark_jedis: [], 
  dark_jedisByID: null, 
  match: false, 
  noMaster: false, 
  noApprentice: false
}

export default function reducer(state = initialState, action){ 
  switch(action.type){ 
    
    case types.PLANET_CHANGE:
    case types.SCROLL_UP:
    case types.SCROLL_DOWN:
      // whatever logic does the check
      return {
        // change the state if necessary
      }


    case types.PLANET_CHANGE: 
      return { 
        ...state,
        current_planet: {'id': action.id, 'name': action.name}
      }
  }
}