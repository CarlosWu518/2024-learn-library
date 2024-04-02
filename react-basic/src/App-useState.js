//useState实现技术器按钮
import { useState } from 'react';
function App() {
  let [count,setCount] = useState(0)
  const handerClick = ()=>{
    setCount(count + 1)
  };
  return (
    <div className="App">
      <button onClick={handerClick}>{count}</button>
    </div>
  );
}

export default App;
