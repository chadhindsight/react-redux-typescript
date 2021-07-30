import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'


ReactDOM.render(<App color="red" />, document.getElementById('root'));
// NB: When using a class component in React wit Typescript you can pass in two generics: One for props, and one for state.
    // If you do state this way, you overwrite state in the React.Component class
