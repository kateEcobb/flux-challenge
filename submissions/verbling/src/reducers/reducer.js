import * as types from '../constants/ActionTypes';

const initialState = { 
  current_planet: null,
  dark_jedis: [], 
  dark_jedisByID: null, 
  homeworlds: [],
  match: false, 
  noMaster: false, 
  noApprentice: false
}

export default function reducer(state = initialState, action){ 
  switch(action.type){ 
    case types.PLANET_CHANGE: 
    console.log('planet changed')
      return { 
        ...state, 
        current_planet: action
      }
    
    case types.SCROLL_UP: 
      //handle if jedi has no master
      let master = false;

      //remove jedi + homeworld at end of array
      if (state.dark_jedis.length === 5){ 
        const oldID = state.dark_jedis.pop();
        state.homeworlds.pop();
        delete dark_jedisByID[oldID];
      }
      
      //check to see if master.url is null and change value if is
      if(action.master.url === null){ 
        master = true;
      }

      return { 
        ...state,
        dark_jedis: state.dark_jedis.unshift(action.id),
        dark_jedisByID: { 
          ...state.dark_jedisByID, 
          [action.id]: { 
            id: action.id, 
            name: action.name, 
            [action.homeworld]: {
              id: action.homeworld.id, 
              name: action.homeworld.name
            }
          }
        }, 
        homeworlds: state.homeworlds.unshift(action.homeworld.id), 
        noMaster: master
      }

    case types.SCROLL_DOWN:
      //handle if jedi has no apprentice
      let apprentice = false; 

      //remove jedi + homeworld at beginning of array
      if (state.dark_jedis.length === 5){ 
        const oldID = state.dark_jedis.shift();
        state.homeworlds.shift();
        delete dark_jedisByID[oldID];
      }

      //check to see if apprentice.url is null and change value if is
      if(action.apprentice.url === null){ 
        apprentice = true;
      }

      return { 
        ...state,
        dark_jedis: state.dark_jedis.push(action.id),
        dark_jedisByID: { 
          ...state.dark_jedisByID, 
          [action.id]: { 
            id: action.id, 
            name: action.name, 
            [action.homeworld]: {
              id: action.homeworld.id, 
              name: action.homeworld.name
            }
          }
        }, 
        homeworlds: state.homeworlds.push(action.homeworld.id), 
        noApprentice: apprentice
      }

    case types.PLANET_CHANGE: 
    case types.SCROLL_UP:
    case types.SCROLL_DOWN:
      //check to see if planetID exists in current homeworlds
      if(state.homeworlds.indexOf(state.current_planet.id) !== -1){ 
        return {
          ...state, 
          match: true
        }
      }    
  }
  console.log(state)
}