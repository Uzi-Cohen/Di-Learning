import './MyBtn.css';
const ByBtn = (props) => {
    const{clickHandle, language, counter} = props;
    return(
        <div className="bar">
            <span>{counter}</span>
            <span>{language}</span>
            <span style={{color:'darkgreen'}} id={language} onClick={clickHandle}>Click me</span>
        </div>
    )
}

export default ByBtn;