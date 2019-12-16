import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.dispatch( addExpense({ description:'water bill', amount:200, createdAt: -31000}));
store.dispatch( addExpense({ description:'gas bill', amount:300, createdAt: -3000}));
store.dispatch( setTextFilter('wat'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log( visibleExpenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));