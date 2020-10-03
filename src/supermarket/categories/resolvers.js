import { generalRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Query: {
		allComentsOfNote: (_, { id }) =>
			generalRequest(`${URL}/getcomments/${id}`, 'GET'),
	},
	Mutation: {
		createComment: (_, { comment }) =>
			generalRequest(`${URL}/comment/create`, 'POST', comment),
        updateComment: (_, { id, comment }) =>
			generalRequest(`${URL}/comment/edit/${id}`, 'PUT', comment),
        deleteCategory: (_, { id }) =>
			generalRequest(`${URL}/comment/delete/${id}`, 'DELETE')
	}
};

export default resolvers;