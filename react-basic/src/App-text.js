const count = 100;
function getName() {
  return 'jack'
}

function Button(){
  return <button>按钮2</button>
}

const List =[{
  name: 'jack',
  age: 18,
  sex: 'male'
},{
  name: 'rose',
  age: 18,
  sex: 'female'
}]

const artcleType = 1;

function getArtcleType() {
  if(artcleType === 1){
    return '1'
  }else if(artcleType === 0){
    return '0'
  }
}
function App() {
  const handerClick = (name,e)=>{
    console.log("button被点击了",name,e);
  }
  return (
    <div className="App">
      this is App
      {/* 使用引号传递字符串 */}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{color:'red'}}>this is div</div>
      <ul>
        {
          List.map((item,index)=>{
            return <li key={index}>{item.name}</li>
          })
        }
      </ul>
      {/* 逻辑与 && */}
      { true && <p>this is p</p> }
      {/* 三元运算 */}
      { false ? <p>this is p</p> : <p>this is p2</p> }
      {/* 调用函数不同渲染模板 */}
      {getArtcleType()}
      <button onClick={handerClick}>按钮</button>
      <button onClick={(e)=>{handerClick('jack',e)}}>按钮1</button>
      {/* 按钮 */}
      <Button />
    </div>
  );
}

export default App;
