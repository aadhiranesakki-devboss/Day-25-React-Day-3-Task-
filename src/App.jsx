// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import InputArea from './components/InputArea'
import OutputArea from './components/OutputArea'


function App() {
const [task, setTask] = useState([
  {
    id : 1,
    title : "task 1",
    description : "Project 1",
    status : false,
  },
  {
    id : 2,
    title : "task 2",
    description : "Project 2",
    status : false,
  }
])

  return <>
    <div className="container my-5">
      <div className="row">
        <InputArea task={task} setTask={setTask}/>
        <hr />        
        <OutputArea task={task} setTask={setTask}/>
      </div>
    </div>
  </>
}

export default App