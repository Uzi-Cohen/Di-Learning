import React from 'react';

const Box = (props) => {
	// console.log(props);
	let {language, votes, handleClick} = props;
	return <div className="row" id={language}>
			<div>{votes}</div>
			<div>{language}</div>
			<div onClick={handleClick}>Click to vote</div>
		</div>;
}


export default Box;