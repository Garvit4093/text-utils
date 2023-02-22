import React,{useState} from 'react'
export default function Form(props) {
  const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText);
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
}
const removeSpace=()=>{
  let newText=text.split(/\s+/);
  setText(newText.join(" "));
  document.getElementById("remove").innerHTML="Removed Extra Spaces!";
 setTimeout(() => {
    document.getElementById("remove").innerHTML="Remove Extra Spaces";
 }, 3000);
}
const handleClear=()=>{
    let newText="";
    setText(newText);
    document.getElementById("clear").innerHTML="Cleared!";
 setTimeout(() => {
    document.getElementById("clear").innerHTML="Clear";
 }, 3000);
}
function handleCopy(){
 navigator.clipboard.writeText(text);
 document.getElementById("copy").innerHTML="Copied!";
 setTimeout(() => {
    document.getElementById("copy").innerHTML="Copy";
 }, 3000);
}
async function handlePaste(){
    const pasteText=await navigator.clipboard.readText();
    document.getElementById("exampleFormControlTextarea1").value+=pasteText;
    document.getElementById("paste").innerHTML="Pasted!";
    setTimeout(() => {
        document.getElementById("paste").innerHTML="Paste";
     }, 3000);
}
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const[text,setText]=useState('');
  return (
    <>
    <div className="container">
    <div className="mb-3">
       <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>{props.heading}</h3></label>
       <textarea className="form-control" style={{border:"solid-black"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" placeholder='Enter text here'></textarea>
    </div>
    <div className="flex">
      <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2 my-2"  id="remove"  onClick={removeSpace}>Remove Extra Spaces</button>
      <button className="btn btn-success mx-2 my-2"  id="clear"  onClick={handleClear}>Clear</button>
      <button className="btn btn-success mx-2 my-2" id="copy" onClick={handleCopy}>Copy</button>
      <button className="btn btn-success mx-2 my-2" id="paste" onClick={handlePaste}>Paste</button>
    </div>
    </div>
    <div className="container my-5">
        <h2>Your Text Summary : {text.split(/\s+/).filter((element)=>{
          return element.length!==0}).length} Words , {text.length} Characters , {0.48*text.split(/\s+/).filter((element)=>{
            return element.length!==0}).length} seconds to read</h2>
    </div>
    </>
  )
}