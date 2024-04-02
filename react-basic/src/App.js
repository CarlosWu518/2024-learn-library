import { useState,useRef } from 'react';
// function Sun(props){
//   return <div>
//     sun{props.name}jsx:{props.child}child:{props.children}
//     </div>
// }
function Sun({ onclickInSun }){
  // console.log(props);
  let msg = "22222222222222"
  return <div>
      <button  onClick={()=>onclickInSun(msg)}>111</button>
    </div>
}
function App() {
  const [msg,setMsg] = useState('')
  let name = "jack"
  let getMsg=(value)=>{
    console.log(value)
    setMsg(value)
  }
  return (
    <div className="App">
      {msg}
      <Sun name={name} child={<input></input>} onclickInSun={getMsg}> 
        <span>111</span>
      </Sun>
    </div>
  );
}

export default App;
