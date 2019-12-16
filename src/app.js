import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch( addExpense({ description:'water bill', amount:200, createdAt: -31000}));
store.dispatch( addExpense({ description:'gas bill', amount:300, createdAt: -3000}));
store.dispatch( addExpense({ description:'rent', amount:800, createdAt: -200}));
store.dispatch( setTextFilter('bill'));

setTimeout(() => {
  store.dispatch( setTextFilter('rent'));
}, 2000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log( visibleExpenses);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));