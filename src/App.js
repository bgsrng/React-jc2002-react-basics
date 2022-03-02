import { useState } from 'react';
import './assets/styles.css'
import "bootstrap/dist/css/bootstrap.min.css"
import TourCard from './components/TourCard/TourCard';
import Navbar from './components/Navbar/Navbar';
import Band from './components/Band/Band';
import ClassComponent from './ClassComponent/ClassComponent';
import ContentCard from './ContentCard/ContentCard';
import TodoItem from './components/TodoItem/TodoItem';
import { Button, Input } from 'reactstrap';

const dataTodo = [
  {
  dates : new Date(),
  action : "Belajar Programming",
  status : "On Going",
  delete : "Delete"
},


{
  dates : new Date(),
  action : "Libur",
  status : "done",
  delete : "Delete"
},

{
  dates : new Date(),
  action : "Masih Belajar Programming",
  status : "On Going",
  delete : "Delete"
}

]

function App() {
  const [myUsername, setMyUsername] = useState("Seto");
  const [fullName, setFullName] = useState("")
  const [todoList, setTodoList] = useState([
    {
    dates : new Date(),
    action : "Belajar Programming",
    status : false
  },
  
  
  {
    dates : new Date(),
    action : "Libur",
    status : true
  },
  
  {
    dates : new Date(),
    action : "Masih Belajar Programming",
    status : false
  }
  
  ])


  function renderTodoList() {
    return todoList.map((val, index) => {
      return (
        <TodoItem
          dates={val.dates}
          action={val.action}
          status={val.status} 
          delete={() => deleteTodoItem(index)}
          edit={() => toggleTodoStatus(index)}
        />
      );
    });
  }

  const changeUsername = () => {
    setMyUsername("Mark")
    setFullName("Jane Bar")
  }

  const [todoInputValue, setTodoInputValue] = useState("")
  const [todoDateValue, setTodoDatetValue] = useState("null")


  const inputHandler = (event) => {
    const {value} = event.target;
    setTodoInputValue(value)
  }

  const inputDateHandler = (event) => {
    const {value} = event.target;
    setTodoDatetValue(value)
  }

  const addTodoItem = () => {
    const newTodoArray = [...todoList]

    newTodoArray.push ({
        dates : todoDateValue,
        action : todoInputValue,
        status : false
    })
    setTodoList(newTodoArray)
  }

  const deleteTodoItem = (index) => {
    const removeTodoArray = [...todoList]

    removeTodoArray.splice (index, 1)
    setTodoList(removeTodoArray)
  }

  const toggleTodoStatus = (index) => {
    const duplicateTodoArray = [...todoList]

    duplicateTodoArray[index].status = !duplicateTodoArray[index].status
    setTodoList(duplicateTodoArray)
  }
  
  return (
  <>
    {/* <Navbar/> */}
    <div className='container'>
      <div className='row my-4'>
        <div className='offset-3 col-6'>
          <Input onChange={inputHandler}/>
          <Input type='date' onChange={inputDateHandler}/>
        </div>
        <div className='col-2'> 
        <Button onClick={addTodoItem} color='success'>Add Todo</Button>
      </div>
      </div>
      <div className='row'>
        <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">  
        {/* {renderContentList()} */}
        {renderTodoList()}
        </div>
      </div>
      <h1>{myUsername}</h1>
      <Button onClick={changeUsername}>Change username</Button>
    </div>
    </> 
  )
            // [
            //   <ContentCard 
            //   username={data[0].username}
            //   location={data[0].location}
            //   numberOfLikes={data[0].numberOfLikes} 
            //   caption={data[0].numberOfLikes} 
            //   />,
            //   <ContentCard 
            //   username={data[1].username} 
            //   location={data[1].location}
            //   numberOfLikes={data[1].numberOfLikes} 
            //   caption={data[1].numberOfLikes} 
            //   />,
            //   <ContentCard 
            //   username={data[2].username} 
            //   location={data[2].location}
            //   numberOfLikes={data[2].numberOfLikes} 
            //   caption={data[2].numberOfLikes} 
            //   />
            // ]
          
      
    
    {/* <Band/>
  <div>
    <TourCard/>
    <TourCard/>
    <TourCard/>
  </div>
  <ClassComponent/> */}

}

export default App;
