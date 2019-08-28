import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class LoginPage extends Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    password: '',
    login: ''
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
    this.setState({login : "successful"})
  }
  
}


 render() {
    return (
      <form onSubmit = {this.onSubmit}>
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
          <Link to="/dashboard" className = "btn btn-primary btn-lg">Login</Link>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
      data : state
  }
}

export default connect(mapStateToProps)(LoginPage);
