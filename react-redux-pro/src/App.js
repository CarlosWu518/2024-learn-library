import { useDispatch,useSelector } from "react-redux";
import { inscrement,decrement,addTONum } from './store/modules/counterStore'
import { fetchChannelList } from "./store/modules/channelStore";
import { useEffect } from "react";
function App() {
  const {count} = useSelector((state) => state.counter);
  const {channelList} = useSelector((state) => state.channeler);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChannelList());
  },[dispatch])
  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement())}>-</button>
      {count}
      <button onClick={()=>dispatch(inscrement())}>+</button>
      <button onClick={()=>dispatch(addTONum(10))}>add to 10</button>
      <button onClick={()=>dispatch(addTONum(20))}>add to 20</button>
      { channelList.map(item => <div key={item.id}>{item.name}</div>) }
    </div>
  );
}

export default App;
