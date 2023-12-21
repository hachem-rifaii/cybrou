import {createStore} from 'redux';

const initialState = {value:0,showCounter:false}

const counterReducer = (state = initialState, action) => {
    if(action.type==="increase"){
        return {...state, value:state.value + action.payload}
    }
    if (action.type==="decrease"){
        return {...state,value:state.value - action.payload}
    }
   if (action.type==="toogleCounter"){
    return{...state,showCounter:!state.showCounter}
   }

    return state;
  }
const store = createStore(counterReducer);

export default store;