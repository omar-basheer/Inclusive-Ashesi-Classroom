// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
        // <Login />
        <SignUp />
  );
}

export default App;
