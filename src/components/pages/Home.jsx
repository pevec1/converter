import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchValute} from "../../redux/slices/sliceValute"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  const [value, setValue] = useState("")
  const [answer, setAnswer] = useState()
  const list = useSelector((state)=>state.value)
  const dispatch = useDispatch()
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)
    setValue(e.target[0].value);
  let temp = value.split(" ")
  // 15 rub in usd
    }
    useEffect(()=>{
      dispatch(fetchValute())
     console.log(list);
    },[dispatch])
      console.log(list)
  
const changeHandler = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <Link to={"/about"}>ABOUT</Link>
      <div>Home</div>
      <form onSubmit={handlerSubmit}>
        <input name="text" onChange={changeHandler} value={value}></input>
        <Button>Answer</Button>
      </form>
      <p></p>
      <input name="answer" value={answer}></input>
    </div>
  );
}
