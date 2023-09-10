
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'



function App() {


  return (
    <>
      
      <h3>React core concept part 2</h3>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('btn3 clicked')}}>Click Me 3</button>
      
      <Counter></Counter>
      <Team></Team>

      <User></User>
    </>
  )
}

const handleClick = () =>{
    alert('btn clicked')
}
const handleClick2 = () =>{
    alert('btn 2 clicked');
}

export default App
