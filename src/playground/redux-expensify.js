console.log('running redux-expensify');

import { createStore, combineReducers } from 'redux';
import  uuid from 'uuid';

// action generator

const addExpense = (
  {
    description ='',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


// expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = ( state=expensesReducerDefaultState, action ) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if ( expense.id === action.id ){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// filters action creators
const setTextFilter = ( text = '' ) => ({
  type: 'SET_TEXT_FILTER',
  text
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});
const sortByAmount = ( ) => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});
const setStartDate = ( startDate ) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = ( endDate ) => ({
  type: 'SET_END_DATE',
  endDate
});

// filters reducer
const filtersReducerDefaultState = {
  text:'',
  sortBy:'date',
  startDate: undefined,
  endDate:undefined
}

const filtersReducer = ( state=filtersReducerDefaultState, action ) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return  {...state, text: action.text}
    case 'SORT_BY_AMOUNT':
      return  {...state, sortBy: action.sortBy}
    case 'SORT_BY_DATE':
      return  {...state, sortBy: action.sortBy}
    case 'SET_START_DATE':
      return  {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      return  {...state, endDate: action.endDate}
    default:
      return state;
  }
};

// store creation
 const store = createStore( 
   combineReducers({
     expenses: expensesReducer,
     filters: filtersReducer
    })
  );

 store.subscribe(()=>{
   console.log(store.getState());
 });

 const expenseOne = store.dispatch( addExpense({ description:'rent', amount:200}));
 const expenseTwo = store.dispatch( addExpense({ description:'coffee', amount:500}));
 
store.dispatch( removeExpense({id: expenseOne.expense.id }));

store.dispatch( editExpense( expenseTwo.expense.id, {amount:800}));
store.dispatch( setTextFilter('text change'));
store.dispatch( sortByAmount());
store.dispatch( sortByDate());
store.dispatch( setStartDate(222));
store.dispatch( setStartDate());
store.dispatch( setEndDate(555));

const demoState = {
  expenses:[{
    id:'12345',
    description: "January Rent",
    note: 'This was final payment for this address',
    amount: 54500, // in pennies.
    createdAt: 0 // date
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount.
    startDate: undefined,
    endDate: undefined
  }
};
