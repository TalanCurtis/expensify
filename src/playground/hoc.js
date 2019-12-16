console.log(" running Higher Order Components 'hoc' ");
// what is a Higher order component? a component that renders another component.
// what are the benefits? 
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

// example 1
/*

// component getting wrapped
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> the info is: {props.info} </p>
  </div>
);


// function that renders  higher order Component
const withAdminWarning = (WrappedComponent) => {
return (props) => (
  <div>
    {props.isAdmin && <p>This is private info. please do not share</p>}
    <WrappedComponent {...props}/>
  </div>
);
};

// this is the Higher order component. it is rendering Info component
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details."/>, document.getElementById('app'));
//*/


// example 2
///*
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> the info is: {props.info} </p>
  </div>
);

const requireAuthentication = (WrappedComponent) => {
return (props) => (
  <div>
    {props.isAuthenticated ?
      <WrappedComponent {...props}/>
      :
      <p>Please log in.</p>
    }
  </div>
);
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details."/>, document.getElementById('app'));
//*/

