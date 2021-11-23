import {Link, NavLink} from 'react-router-dom';

const Contact = () => {
return (
	<nav className="nav-wrapper red darken-3">
		<div className="container">
			<Link className="brand-logo" to="./">Blog</Link>
			<ul className="right">
				<li>
					<NavLink exact to='./'>Home</NavLink>
				</li>
				<li>
					<NavLink to='./About'>About</NavLink>
				</li>
				<li>
					<NavLink to="./Contact">Contact</NavLink>
				</li>
			</ul>
		</div>
	</nav>
	);
}

export default Contact;