const count = 100;
function getName() {
  return 'jack'
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
function App() {
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
    </div>
  );
}

export default App;
