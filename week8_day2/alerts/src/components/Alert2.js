const Alert2 = (props) => {
	let {text,show} = props;
	if (!show) {
		return null;
	} else {
		return <div className="alert alert-danger" role="alert">{text}</div>;
	}
}





export default Alert2;