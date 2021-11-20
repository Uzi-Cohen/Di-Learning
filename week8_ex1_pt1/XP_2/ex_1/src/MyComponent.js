import gold from './gold1.png';
import './MyComponent.css';
const items = ['coffe', 'tea', 'milk'];

function MyComponent(){
    return(
        <div className='myClass'>
        <h1>This is a Header</h1>
        <p>this is a paragraph</p>
        <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
        <form>
            <h2>This is a Form</h2>
            <label>Enter your name</label><br/>
            <input type='text'></input>
            <input type='submit'></input>
        </form>
        <h3>Here is an image</h3>
        <img src={gold} alt="REACT" width="500" height="200"/>
        <h4>This is a List</h4>
        <ul>
            {
                items.map((item) => <li>{item}</li>)
            }
        </ul>
        </div>
    );
}

export default MyComponent;