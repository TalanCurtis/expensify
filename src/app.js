import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
     ExpenseDashboardPage
  </div>
);
const AddExpensePage = () => (
  <div>
    AddExpensePage
  </div>
);
const EditExpensePage = () => (
  <div>
    EditExpensePage
  </div>
);
const HelpPage = () => (
  <div>
    HelpPage
  </div>
);
const NotFoundPage = () => (
  <div>
    404! NotFoundPage.
    <Link to="/"> Go Home </Link>
  </div>
);

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact > Home </NavLink>
    <NavLink to="/create" activeClassName="is-active" > Add </NavLink>
    <NavLink to="/edit" activeClassName="is-active" > Edit </NavLink>
    <NavLink to="/help" activeClassName="is-active" > Help </NavLink>
  </div>
);

const routes = (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </div>

  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));