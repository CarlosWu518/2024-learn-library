import { useState,useEffect } from "react"

const url = "http://geek.itheima.net/v1_0/channels"

function Sun (props){
    return <button onClick={props.close(false)}>关闭</button>
}
function App() {
   let [list,SetList] = useState([])
   let [count,setCount] = useState(0)
   function getList(){
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data)
            SetList(data.data.channels)
        })
    }

    // 1.没有依赖项 
    //  useEffect(()=>{
    //     getList()
    // })

    // 2.传入空数组依赖 只会在组件初始时渲染
    useEffect(()=>{
        getList()
    },[])
    let changeList=()=>{
        // list.forEach((e,i) => {
        //     e.name = e.name+i
        // });
        // console.log(list);
        let num = count+1
        SetList(list.map((item,i)=>{
            return {...item,name:item.name+i}
        }))
        // SetList(list.map(item=>item))
        setCount(num)
    }

    //3.依赖项发生变化
    // useEffect(()=>{
    //     getList()
    //     // setCount(count + 1) 
    // },[count])
    let [show,SetShow] = useState(true)

    const closeSun = (type)=>{
        return ()=>{
            SetShow(type)
        }
    }
    return <div>
        {count}
        <button onClick={changeList}>reload</button>
        {list.map(item=><div key={item.id}>{item.name}</div>)}
        {show && <Sun isShow={show} close={closeSun}></Sun>}
    </div>
}

export default App