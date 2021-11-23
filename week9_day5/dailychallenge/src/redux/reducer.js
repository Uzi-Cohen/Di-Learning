import {SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING} from './actions'
// import {combineReducers} from 'redux';

let initState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
}

export const reducer = (state = initState, action = {}) => {
	switch (action.type) {
		case FETCH_MOVIES:
			let results = action.payload.Search ? action.payload.Search : [];
			return {
				...state,
				movies: results,
				loading:false
			};
		case FETCH_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading:false
			}
		case LOADING:
			return {
				...state,
				loading:true
			}
		default:
			return {...state};
	}
}

// export default reducer;

// const movieReducer = (state = {}, action = {}) => {
// 	switch (action.type) {
// 		default:
// 			return {...state};
// 	}
// }

// export const reducer = combineReducers(
// 	{
// 		fetchMoviesReducer,
// 		movieReducer
// 	}
// )

