import React from 'react';
import blogpic from '../blog.png';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Home extends React.Component {

	render() {
		let {posts} = this.props;
		console.log(posts);
		return(
			<div className="container home">
				{
					(posts.length>0) ?
					posts.map((post) => {
						return(
						<div className="post card" key={post.id}>
						<img src={blogpic} alt="blog" />
						<div className="card-content">
							<Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
							<p>{post.body}</p>
						</div>
						</div>
						);
					})
					:
					<div className="center">No posts to show
					</div>
				}
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts
	}
}

// const mapDispatchToProps = (state) => {
// 	console.log("mapDispatchToProps");
// }

// export default Home;

export default connect(mapStateToProps)(Home);

