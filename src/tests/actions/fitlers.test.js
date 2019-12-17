import moment from 'moment';
import { 
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from '../../actions/filters';

test('should generate set start date action object', ()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', ()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate sort by date action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('should generate sort by amount action object', ()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should generate text filter action object from passed in value', ()=>{
  const text = 'bill'
  const action = setTextFilter(text);
  expect(action).toEqual({
   type: 'SET_TEXT_FILTER',
   text: text
  });
});

test('should generate text filter action object from default values', ()=>{
  const action = setTextFilter();
  expect(action).toEqual({
   type: 'SET_TEXT_FILTER',
   text: ''
  });
});