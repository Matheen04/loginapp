import React, { Component } from 'react';
import { render } from 'react-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'


class Dashboard extends React.Component {
    constructor(props){
        super(props);
    
      
      }
 render() {
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
                
            </thead>
            <tbody>
            {this.props.data.map( (item) => {
                if(item.name !== 'loginvalidation'){
                    return(<tr key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNo}</td>
                        
                        </tr>);
                }
                })
            }
            </tbody>
        </table>
      
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        data : state
    }
  }
  Dashboard.prototypes = {
    data : PropTypes.array
  };
  
  export default connect(mapStateToProps)(Dashboard);
