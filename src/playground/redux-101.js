console.log("running redux-101");
// create a store
import { createStore } from 'redux';

const store = createStore((state = { count:0 }, action)=>{
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
});

console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
  console.log("store:", store.getState())
})

// Actions
store.dispatch({
  type:'INCREMENT',
  incrementBy: 5
});

// to unsubscribe to the store just call the function that subscribed in the first place.
// unsubscribe();

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