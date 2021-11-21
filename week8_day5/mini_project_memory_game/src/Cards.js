import Hero from './Hero'
import './Cards.css'
const Cards = (props) => {
    const {obj} = props;
    return( 
        <div className='container'>
            {
                obj.map((item) => <Hero info={item} func={props.func}/>)
            }
        </div>
    )
}

export default Cards;