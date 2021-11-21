const colorClasses = {
    red: 'alert-danger',
    orange: 'alert-warning',
    green: 'alert-success'
}

const Alert3 = (props) => {
	let {text,color} = props;
	if (colorClasses[color] === undefined) {
		// console.log(colorClasses[color]);
		 alert(`The color ${color} is not in the list.`);
	}
	return <div className={`alert ${colorClasses[color]}`} role="alert">{text}</div>;
}

export default Alert3;