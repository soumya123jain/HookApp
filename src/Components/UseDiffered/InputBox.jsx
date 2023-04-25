import { useState } from "react";
import List from "./List";

 
 const InputBox=()=>{
   const[input,setInput]=useState("");
   const handleChange=(e)=>{
     setInput(e.target.value)
   }
   return(
     <>
      <input type="text" value={input} onChange={handleChange}/>
      <List input={input}/>
      
     </>
   )
 }

 export default InputBox;