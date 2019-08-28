import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import PropTypes from 'prop-types';


class LoginPage extends Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    password: '',
    login: '',
    error:''
  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

}
onChange(e){
  this.setState({[e.target.name] : e.target.value})
}

onSubmit(e){
  e.preventDefault();
  if(this.state.username === this.props.data[0].username && this.state.password === this.props.data[0].password){
    this.setState({login : "successful",error: ''})
  }else{
    this.setState({login : "unsuccessful",error: 'Invalid Entry'})
  }
  
}


 render() {
    return (
      <div>
        {this.state.login!=='successful' && <form onSubmit = {this.onSubmit}>
        <h1>Login Page</h1>
        <div className = "form-group">
          <label className = "control-label">Username</label>
          <input
          value = {this.state.username}
          onChange = {this.onChange}
          type = "email"
          name = "username"
          className = "form-control"
          />
        </div>
        <div className = "form-group">
          <label className = "control-label">Password</label>
          <input
          value = {this.state.password}
           onChange = {this.onChange}
          type = "password"
          name = "password"
          className = "form-control"
          />
        </div>

        <div className = "form-group">
          <button to="/dashboard" className = "btn btn-primary btn-lg">Login</button>
        </div>
      </form>}
      <h6>{this.state.error}</h6>
      {this.state.login === 'successful' && <Dashboard />}
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
      data : state
  }
}
LoginPage.prototypes = {
  data : PropTypes.array
};

export default connect(mapStateToProps)(LoginPage);
