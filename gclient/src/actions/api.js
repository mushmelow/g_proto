import axios from 'axios';

export default {
	user: {
		signup: (credentials) => 
			axios.post('users/signup', credentials)
			.then(res => res.data.user),
		login: (credentials) => 
			axios.post('users/signin', credentials)
			.then(res => {
				localStorage.setItem('bookwormJWT',res.data.user.token)
				localStorage.setItem('email',res.data.user.email)
				return res.data.user;
			})	
	}
}