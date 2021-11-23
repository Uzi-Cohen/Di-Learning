import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

export default class NavBar extends React.Component {
	render() {
		return(
			<nav>
					<Link to="/"> MovieSeriesInfo </Link>
			</nav>
		)
	}
}	



