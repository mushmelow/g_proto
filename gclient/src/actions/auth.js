import {USER_LOGGED_IN} from '../types';
import {USER_LOGGED_OUT} from '../types';
import api from './api';
import setAuthorizationHeader from "./setAuthorizationHeader";

export const userLoggedIn= (user) => ({
	type: USER_LOGGED_IN,
	user
})

export const userLoggedOut= (user) => ({
	type: USER_LOGGED_OUT
})

export const signup = (credentials) => (dispatch) => 
	api.user.signup(credentials).then(user => dispatch(userLoggedIn(user)));

// export const login = (credentials) => (dispatch) => 
// 	api.user.login(credentials).then(user => dispatch(userLoggedIn(jwt.decode(token))));	

// 					localStorage.setItem('jwtTokenA', token);
// 				setAuthorizationToken(token);

export const login = (credentials) => (dispatch) =>
  api.user.login(credentials).then(user => {
    localStorage.bookwormJWT = user.token;
    setAuthorizationHeader(user.token);
    dispatch(userLoggedIn(user));
  });

export const logout = () => (dispatch) => {
    localStorage.removeItem('bookwormJWT');
    console.log('LOGOUT BUTTON CLICKED')
		dispatch(userLoggedOut());
};
