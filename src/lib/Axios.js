import axios from 'axios';
import { SERVER } from 'config/config.json';

export const getResponse = async (url, token) => {
	try {
		const data = await axios.get(`${SERVER}${url}`, {
			headers: token && {
				'Authorization': `Bearer ${token}`,
			},
		});
		return data;
	} catch (error) {
		throw error;
	}
};

export const postRequest = async (
	url,
	request,
	token
) => {
	try {
		const data = await axios.post(
			`${SERVER}${url}`,
			request,
			{
				headers: token && {
					'Authorization': `Bearer ${token}`,
				},
			}
		);
		return data;
	} catch (error) {
		throw error;
	}
};

export const modifyRequest = async (url, request, token) => {
	try {
		const data = await axios.put(
			`${SERVER}${url}`,
			request,
			{
				headers: token && {
					'Authorization': `Bearer ${token}`,
				},
			}
		);
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteRequest = async (url, token) => {
	try {
		const data = await axios.delete(`${SERVER}${url}`, {
			headers: token && {
				'Authorization': `Bearer ${token}`,
			},
		});
		return data;
	} catch (error) {
		throw error;
	}
};