import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Message} from 'semantic-ui-react';
import Validator from "validator";
import InlineError from "../messages/InlineError"

class SignUpForm extends React.Component {

	state={
		data:{
			email:'',
			password:''
		},
		loading: false,
		errors: {}
	};

	onChange = e => 
		this.setState({
			data:{ ...this.state.data, [e.target.name]: e.target.value}
		});

	onSubmit = e => {
		const errors = this.validate(this.state.data);

		this.setState({errors});
		if(Object.keys(errors).length ===0){
			this.props
				.submit(this.state.data)
				.catch(err=> this.setState({errors: err.response.data.errors}));
		}
	};

	validate = (data) => {
		const errors = {};
		if (!data.password) errors.password = "Can't be blank";
		if (!Validator.isEmail(data.email)) errors.email= "Invalid email";
		return errors;
	}

	render() {
		const {data, errors} = this.state;
		return (
			
			<Form onSubmit={this.onSubmit}> 
				{errors.global && (
					<div className="alert alert-danger">
					  <strong>Something went wrong </strong> <p> {errors.global} </p>
					</div>
				)}

			  <div className="form-group">
			    <input 
			    	type="email" 
			    	className="form-control" 
			    	value={data.email}
			    	onChange={this.onChange}
			    	name="email"
			    	placeholder="Email"
			    />
			  </div>

			  <div className="form-group">
			    <input 
			    	type="password" 
			    	className="form-control" 
			    	value={this.state.password}
			    	onChange={this.onChange}
			    	name="password"
			    	placeholder="Password"
			    />
			  </div>
			  <button type="submit" className="btn btn-primary">Sign Up</button>

			</Form>
		);
	}
}

SignUpForm.propTypes={
	submit: PropTypes.func.isRequired
};
export default SignUpForm;