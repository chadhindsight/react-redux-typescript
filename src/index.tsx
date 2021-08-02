import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App'

ReactDOM.render(<App />, document.getElementById('root'));
// NB: When using a class component in React wit Typescript you can pass in two generics: One for props, and one for state.
// If you do state this way, you overwrite state in the React.Component class
