console.log("running redux-101");
// action generators - functions that return an action.
/*
const incrementBy = (payload = {}) => {
  type: 'INCREMENT';
  incrementBy:  typeof action.incrementBy === 'number' ? action.incrementBy : 1;
}
*/
const incrementBy = ({ incrementBy = 1 } = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementBy = ({ decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

// reducer
// 1 . reducer are a pure functions. output only dependent on input.
// 2. Never change state or action. Do not mutate. 

const countReducer = ( state = { count:0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {count: state.count + incrementBy};
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {count: state.count - decrementBy};
    case 'SET':
      return {count: action.count };
    case 'RESET':
      return {count: 0};
    default:
      return state;
  }
} ;

// create a store
import { createStore } from 'redux';

const store = createStore(countReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
  console.log("store:", store.getState())
})

// Actions
store.dispatch({
  type:'INCREMENT',
  incrementBy: 5
});

store.dispatch(incrementBy())
store.dispatch(incrementBy({incrementBy:35}))

// to unsubscribe to the store just call the function that subscribed in the first place.
// unsubscribe();

/*
store.dispatch({
  type:'DECREMENT',

});

store.dispatch({
  type:'RESET'
});

store.dispatch({
  type:'DECREMENT',
  decrementBy: 12
});

store.dispatch({
  type:'SET',
  count: 144
});
*/