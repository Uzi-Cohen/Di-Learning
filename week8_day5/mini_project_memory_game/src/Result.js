import './Result.css';
const Result = (props) => {
    return( 
        <div id='header'><h1>Superheroes memorygame:</h1>
        <div id='scores'><strong>Score: {props.clicks} </strong><strong>Top score: {props.best}</strong></div>
        </div>
    )
}

export default Result;