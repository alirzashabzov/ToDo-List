import Form from './components/Form';
import './App.css';
import { useEffect, useState } from 'react';
import Todolist from './components/Todolist';


function App() {
const [inputText, setInputText]= useState('');
const [todos, setTodos] = useState([]);
const[status, setStatus]=useState('all');
const[filteredTodos, setFilteredTodos]=useState([]);

useEffect(()=>{
 getLocalTodos();
},[])


useEffect(() => {
  filterHandler()
saveLocalTodos();
 
}, [todos,status])//eslint-disable-line
//bunu yadda saxla worning gelmesini engelleyior

  //console.log(status);
//console.log(filteredTodos);

const filterHandler=()=>{
  switch (status) {
    case 'completed':
      setFilteredTodos(todos.filter((todo)=>todo.completed ===true));
      
      break;
      case 'uncompleted':
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    break;
    default:
      setFilteredTodos(todos);
      
  }
}

 
//save to local:))))
const saveLocalTodos=()=>{
localStorage.setItem('todos', JSON.stringify(todos))
}

const getLocalTodos=()=>{
if (
  localStorage.getItem('todos')=== null
) {
  localStorage.setItem('todos',JSON.stringify([]))
}else{
  setTodos(JSON.parse(localStorage.getItem('todos')))
}
}
//todos ana div olduqu ucun onu ekleyirdik ancaq  

  return (
    <div className="App">
      <header>
        <h1>MY TODO LIST</h1>
      </header>
      <Form
      inputText={
        inputText
      }
      setInputText={
        setInputText
      }
      todos={
        todos
      }
      setTodos={
        setTodos
      }
      setStatus={
        setStatus
      }
      
      />
   <Todolist
   todos={todos}
   setTodos={setTodos}
   filteredTodos={filteredTodos}
   />
    </div>
  );
}

export default App;
