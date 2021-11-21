import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchMovie,setLoading} from '../redux/actions'

class Movie extends React.Component {
	constructor(props){
		super();
	}
	componentDidMount = () => {
		this.props.fetchMovie();
		this.props.setLoading();
	}
	render() {
		if (this.props.loading) {
			return <div>loading</div>
		} else {
			let {Actors, Director, Genre, imdbID, imdbRating, Plot, Poster, Rated, Released, Title, Writer} = this.props.movie;
			return (
				<div id="movie">
					<img alt="movie poster" src={Poster} />
					<div>
						<h2>{Title}</h2>
						<ul>
							<li><strong>Genre:</strong> {Genre}</li>
							<li><strong>Released:</strong> {Released}</li>
							<li><strong>Rated:</strong> {Rated}</li>
							<li><strong>IMDB Rating:</strong> {imdbRating}</li>
							<li><strong>Director:</strong> {Director}</li>
							<li><strong>Writer:</strong> {Writer}</li>
							<li><strong>Actors:</strong> {Actors}</li>
						</ul>
					</div>
					<div>
						<h2>About</h2>
						<p>{Plot}</p>
						<div className="links">
							<a href={`https://www.imdb.com/title/${imdbID}`}><button>View on IMDB</button></a>
							<Link to='../../'>Go back to Search</Link>
						</div>
					</div>
				</div>
			)
		}
	}
}


const mapStateToProps = (state) => {
	return {
		movie: state.movie,
		loading: state.loading
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	let id = ownProps.match.params.id;
	return {
		fetchMovie: () => dispatch(fetchMovie(id)),
		setLoading: () => dispatch(setLoading())
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(Movie);

