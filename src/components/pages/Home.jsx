import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchValute } from "../../redux/slices/sliceValute";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
  const [valtext, setVal] = useState({text:"100", val:"USD"});
  const [answer, setAnswer] = useState({text:"0", val:"USD"});
  const list = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [list2, setList2] = useState({});
  useEffect(() => {
    const fetchOneUser = async (_) => {
      try {
        const data = await dispatch(fetchValute()).unwrap();
        console.log("success", setList2(data.Valute));
      } catch (err) {
        console.log("error", `Fetch failed: ${err.message}`);
      }
    };

    fetchOneUser();
  }, []);

  let temp;
  console.log(list2);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    console.log(e);
      setVal({...valtext, [name]: String(e.target.value) });
 
    Object.entries(list2).map(([id, subject], i) => {
      console.log(subject.CharCode, valtext.val);
      if (subject.CharCode == valtext.val.toUpperCase()) {
        setAnswer({
          text: String((valtext.text * subject.Nominal) / subject.Value),
          val: subject.CharCode,
        });
      }
    });
 };

  useEffect(() => {
    handlerSubmit;
  })
  console.log(valtext);

  const changeHandler2 = () => {
   // temp = value.split(" ");
    // 15 rub in usd
    };

  const changeHandler = (e) => {
    console.log(e);
       const name = e.target.name;
    setVal({...valtext, [name]: String(e.target.value) })
  };

  return (
    <div>
      <Link to={"/about"}>ABOUT</Link>
      <div>Home</div>
      <form onSubmit={handlerSubmit}>
        <input
          name="text"
          onChange={changeHandler}
          value={String(valtext.text)}
          required
        ></input>{" "}
        RUB in
        <select name="val" value={valtext.val} onChange={changeHandler} required={true}>
          {Object.entries(list2).map(([id, subject], i) => (
            <option key={i} value={subject.CharCode}>
              {subject.CharCode}
            </option>
          ))}
        </select>
        <Button type="submit">Answer</Button>
      </form>
      <p></p>
      <input name="answer" value={answer.text}></input>{" "}
      {answer.val === undefined ? "" : answer.val.toUpperCase()}
    </div>
  );
}
