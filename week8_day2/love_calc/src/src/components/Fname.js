const Fname = (props) => {
  const {handleFname, fname} = props;
  return(
    <div>
      <input type="text" onChange={handleFname} /> {fname}
    </div>
  )
}
export default Fname;
