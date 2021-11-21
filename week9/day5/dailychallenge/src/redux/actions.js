export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIE = 'MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const LOADING = 'LOADING';

export const searchDB = (searchTerm) => async (dispatch) => {
	if (searchTerm.length) {
		try{
			let response = await fetch(`http://www.omdbapi.com/?apikey=74da0228&s=${searchTerm}`);
			let data = await response.json();
			dispatch ({
				type: FETCH_MOVIES,
				payload: data
			})
		} catch(err) {
			console.log(err);
		}
	}
}

export const fetchMovie = (id) => async (dispatch) => {
	try{
		let response = await fetch(`http://www.omdbapi.com/?apikey=74da0228&i=${id}`);
		let data = await response.json();
		dispatch ({
			type: FETCH_MOVIE,
			payload: data
		})
	} catch(err) {
		console.log(err);
	}
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}

