import React from 'react';
import {connect} from 'react-redux';
import MoviesCard from './MoviesCard';

class MoviesContainer extends React.Component {

	render() {
		let {movies} = this.props;
		// console.log(movies);
		return(
			<>
			{(movies.length>0) && <div id="moviescontainer">
			{
				movies.map((item,i) =>{
					let {Title, Year, imdbID, Poster} = item;
					return <MoviesCard title={Title} year={Year} imdbID={imdbID} poster={Poster} key={i} />
				}
				)
			}
			</div>
		}
		</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

// const mapDispatchToProps = (dispatch) => {
	// let value = document.getElementById("input").value;
	// return {
		// handleClick: () => dispatch(searchDB(document.getElementById("input").value))
	// }
// }

export default connect (mapStateToProps)(MoviesContainer);

