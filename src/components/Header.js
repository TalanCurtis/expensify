import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact > Home </NavLink>
    <NavLink to="/create" activeClassName="is-active" > Add </NavLink>
    <NavLink to="/edit" activeClassName="is-active" > Edit </NavLink>
    <NavLink to="/help" activeClassName="is-active" > Help </NavLink>
  </div>
);

export default Header;