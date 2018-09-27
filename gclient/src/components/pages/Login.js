import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LoginForm from '../forms/LoginForm';
import {login} from '../../actions/auth';

class Login extends React.Component{
submit = (data) => 
	this.props.login(data).then(()=> 
		this.props.history.push("/"));

	render(){
		return(
			<div className="row">
				<div className="col"></div>
				<div className="col-6">
					<br/>
					<br/>
					<h2>Login</h2>
					<br/>
					<LoginForm submit={this.submit}/>
				</div>
				<div className="col"></div>
			</div>
		);
	}
}

Login.propTypes={
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(null, {login})(Login);