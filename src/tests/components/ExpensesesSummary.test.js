import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary }  from '../../components/ExpensesSummary';

test('should correctly render ExpenseSummary with 1 expense', ()=>{
  const wrapper =  shallow(<ExpensesSummary  expensesCount={1} expensesTotal={234} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expense', ()=>{
  const wrapper =  shallow(<ExpensesSummary  expensesCount={33} expensesTotal={2343434} />);
  expect(wrapper).toMatchSnapshot();
});