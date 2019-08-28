import React, { Component } from 'react';
import { render } from 'react-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import {connect} from 'react-redux';



function App(props){

    return (
     <div>
        <LoginPage />

        
      </div>
    );
  }




export default App;