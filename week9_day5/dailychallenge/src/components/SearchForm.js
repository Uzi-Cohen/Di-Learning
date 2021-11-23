import React from 'react';
// import { BrowserRouter, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {searchDB} from '../redux/actions'

class SearchForm extends React.Component {

	render() {
		let {handleClick} = this.props;
		return(
			<div id="searchform">
			<span>Search for a movie or TV series:</span>
			<input id="input" type="text" />
			<button onClick={handleClick}>Search</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

const mapDispatchToProps = (dispatch) => {
	// let value = document.getElementById("input").value;
	return {
		handleClick: () => dispatch(searchDB(document.getElementById("input").value))
	}
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchForm);

