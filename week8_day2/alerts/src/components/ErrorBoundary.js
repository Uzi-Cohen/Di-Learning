import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: false
		}
	}
	static getDerivedStateFromError(error){
		console.log(11);
		// if (error) {
		// 	this.setState({error:true});
		// }
		return {
			error:true
		};
	}
	render(){
		if (this.state.error) {
			return <div>Something went wrong</div>
		}
		return this.props.children;
		// return <div>asddasdasd</div>
	}

}

export default ErrorBoundary;
