import axios from 'axios';

export function getUsers() {
	return axios.get('https://fakestoreapi.com/users')
}

export function getUserDetails(id) {
	return axios.get(`https://fakestoreapi.com/users/${id}`)
}