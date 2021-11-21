const Alert = (props) => {
	let {text} = props;
	return(
		<div className="alert alert-danger" role="alert">{text}</div>
	)



}





export default Alert;