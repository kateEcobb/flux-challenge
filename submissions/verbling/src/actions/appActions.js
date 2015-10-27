import * as types from '../constants/ActionTypes';

export function getMaster(jedi) { 
  return { 
    type: types.SCROLL_UP, 
    jedi
  };
}

export function getApprentice(jedi) { 
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