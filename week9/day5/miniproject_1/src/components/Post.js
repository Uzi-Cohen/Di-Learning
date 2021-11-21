import React from 'react';
import {connect} from 'react-redux';
import deletePost from '../redux/Postactions'

class Post extends React.Component {
	handleClick = () => {
		this.props.deletePost(this.props.post.id);
	    this.props.history.push('/');
}
	render() {
		let {post} = this.props;
		return(
			<div className="container">
			{ (post) ?
			<div className="post">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
				<button className="btn grey" onClick={this.handleClick}>Delete post</button>
			</div>
			:
			<div>Loading...</div>
			}
			</div>
		)
	}
}

const mapStateToProps = (state,ownProps) => {
	let id = ownProps.match.params.post_id;
	return {
		post:state.posts.find(post => post.id === id)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deletePost: (id) => dispatch(deletePost(id))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);