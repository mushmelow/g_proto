import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignUpForm from '../forms/SignUpForm';
import {signup} from '../../actions/auth';

class SignUp extends React.Component{
submit = (data) => 
	this.props.signup(data).then(()=> 
		this.props.history.push("/"));

	render(){
		return(
			<div className="row">
				<div className="col"></div>
				<div className="col-6">
					<br/>
					<br/>
					<h2>Signup Form</h2>
					<br/>
					<SignUpForm submit={this.submit}/>
				</div>
				<div className="col"></div>
			</div>
		);
	}
}

SignUp.propTypes={
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	signup: PropTypes.func.isRequired
};

export default connect(null, {signup})(SignUp);