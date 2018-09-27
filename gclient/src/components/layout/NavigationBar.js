import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBarConnected from './NavigationBarConnected';
import NavigationBarDisconnected from './NavigationBarDisconnected';
import {logout} from '../../actions/auth'

const NavigationBar = ({isAuthenticated, logout}) =>(
		<div>
			{isAuthenticated ? <NavigationBarConnected logout={logout}/> : <NavigationBarDisconnected/>}
		</div>
);


function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar);