const Sname = (props) => {
  const {handleSname, sname} = props
  return(
    <div>
      <input type="text" onChange={handleSname} /> {sname}
    </div>
  )
}
export default Sname;
