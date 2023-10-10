import { configureStore } from '@reduxjs/toolkit'


const reducer = (state = 0, action) => {
  /* console.log('reducer called');
  return state; */

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  }

  return state;
};

const store = configureStore({
  reducer:reducer
});

store.subscribe(() => {
  console.log('current state', store.getState());
});

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'DECREMENT'
})
store.dispatch({
  type: 'INCREMENT'
})