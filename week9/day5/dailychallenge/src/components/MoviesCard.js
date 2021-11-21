import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchMovie} from '../redux/actions'

class MoviesCard extends React.Component {
	constructor(props){
		super();
	}
	handleClick = (id) => {
		console.log(id);
		this.props.fetchMovie(id);
	}
	render() {
		console.log();
		let {title, year, imdbID, poster} = this.props;
		return(
			<div className="card">
				<img src={poster} alt="movie poster" />
				<p>{title} - {year}</p>
				<Link to={`./movie/${imdbID}`}><button>Details »</button></Link>
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		movies: state.movies
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	// let value = document.getElementById("input").value;
	return {
		fetchMovie: (id) => dispatch(fetchMovie(id))
	}
}

export default connect (null,mapDispatchToProps)(MoviesCard);

