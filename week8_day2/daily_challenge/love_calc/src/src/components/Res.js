const Res = (props) => {
  const {results} = props;
  const {fname,sname,percentage,result} = results
  return(
    <div>
      Results:
      <div>{fname} & {sname}</div>
      <div>precatntage: {percentage}</div>
      <div>result: {result}</div>
    </div>
  )
}
export default Res;
