
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  let [value,setVal] = useState(" ");
  useEffect(()=>{
    if(value.trim()!==""){
      document.getElementById("result").textContent = `Hello ${value}!`
    }
    else{
      document.getElementById("result").textContent = ``
    }
  },[value])
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your name:</h2>
        <input type="text" onChange={(e)=>setVal(e.target.value)} />
        <p id="result"></p>
    </div>
  )
}

export default App
