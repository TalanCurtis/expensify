import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
  
  return (
    <div>
        <h1>{`Viewing ${expensesCount} ${expenseWord} totaling ${formatedExpensesTotal}`}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses) / 100,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);