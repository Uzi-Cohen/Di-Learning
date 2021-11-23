const deletePost = (id) => {
	return {
		type: 'DELETE_POST',
		payload: id
	}
}

export default deletePost;