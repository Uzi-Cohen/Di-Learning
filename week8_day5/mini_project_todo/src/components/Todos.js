import './todos.css';

const Todos = (props) => {
    let {list} = props;
    return(
        <>
        {
            list.map((item)=> <div id='todo'>{item}</div>)
        }
        </>
    )
}

export default Todos;