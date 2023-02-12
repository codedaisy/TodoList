
import React,{useState} from 'react';
import Header from './Components/Header';
import Form from "./Components/Form";
import './App.css';
import TodosList from "./Components/TodosList"

const App = () => {
  const [input, setInput]= useState("");
  const [todos, setTodos]= useState([]);
  return (
    <div className="case">
      <div className="app-wrap" >
        <div>
        <Header />    
        </div>
        <div>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
      />
        </div>
        <div>
         <TodosList 
         todos={todos}
         setTodos={setTodos}
         />
        </div>
      </div>
    </div>
  );
}

export default App;
