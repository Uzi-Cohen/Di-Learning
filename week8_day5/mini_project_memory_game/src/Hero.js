import './Hero.css'
const Hero = (props) => {
    const {info} = props;
    return( 
        <div onClick={props.func} id={info.id} className='card'>
            <img id={info.id} src={info.image} alt={info.name} width="210" height="260"/>
            <p id={info.id}><strong>Name: </strong>{info.name}</p>
            <p id={info.id}><strong>Occupation: </strong>{info.occupation}</p>
        </div>
    )
}

export default Hero;