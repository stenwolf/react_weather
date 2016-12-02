import {FETCH_WEATHER} from '../actions/index';
export default function(state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      console.log(action.payload);
      //dont do this, because it changes the state directly
      //return a new version of state instead
      //return state.push(action.payload.data);

      //this is ES6 syntax, same as below
      //return state.concat([action.payload.data]);
      return[action.payload.data, ...state]; //return something like [city, city, city]


  }
  return state;
}
