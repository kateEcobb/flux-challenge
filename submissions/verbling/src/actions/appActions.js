import * as types from '../constants/ActionTypes';

function getMaster(jedi) { 
  return { 
    type: types.SCROLL_UP, 
    jedi
  };
}

function getApprentice(jedi) { 
  return { 
    type: types.SCROLL_DOWN, 
    jedi
  };
}

export function changePlanet(planet) { 
  return { 
    type: types.PLANET_CHANGE, 
    planet
  }
}


// function API(jediID) { 
//   return function(dispatch) { 
//     return fetchJedi

//   }
// }