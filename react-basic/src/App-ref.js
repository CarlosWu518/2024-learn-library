import { useState,useRef } from 'react';
function App() {
  let [count,setCount] = useState('')
  const inputIn = (e)=>{
    setCount(e.target.value)
    console.log(count);
  };
  let inputRef = useRef(null)
  const click = () =>{
    console.log(inputRef);
    console.dir(inputRef);
 }
  return (
    <div className="App">
      <input onChange={inputIn} ref={inputRef}></input>
      <button onClick={click}>按钮</button>
    </div>
  );
}

export default App;
