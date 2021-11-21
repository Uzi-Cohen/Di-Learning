const Calc = (props) => {
  const {handleClick} = props;
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
export default Calc
