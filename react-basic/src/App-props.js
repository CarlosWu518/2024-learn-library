// import { useState,useRef } from 'react';
import { useState, createContext, useContext} from 'react';

const Context = createContext()
// function Sun(props){
//   return <div>
//     sun{props.name}jsx:{props.child}child:{props.children}
//     </div>
// }
function Sun(props){
  console.log(props);
  let name = props.name
  name = "carlos"
  return <div>
    sun1:{name}
      <button  onClick={()=>props.onclickInSun(name)}>send</button>
    </div>
}
function Sun2(props){
  let msg = useContext(Context)
   return <div>sun2:{props.name},{msg}<Sun3></Sun3>
  </div>
}

function Sun3(){
  let msg = useContext(Context)
  return <div>sun3:{msg}</div>
}
function App() {
  const [msg,setMsg] = useState('')
  let name = "jack"
  let getMsg=(value)=>{
    console.log(value)
    setMsg(value +"1")
  }
  return (
    <div className="App">
      father:{msg}
      <Context.Provider value={msg}>
        <Sun2 name={msg}></Sun2>
      </Context.Provider>
      <Sun name={name} child={<input></input>} onclickInSun={getMsg}> 
        <span>send</span>
      </Sun>
    </div>
  );
}

export default App;
