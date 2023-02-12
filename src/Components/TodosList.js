import React from "react"

const TodosList = ({todos, setTodos}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item)=>{
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
            }
            return item;
        })
    );
};   
  const handleDelete = ({id}) => {
        setTodos(todos.filter((todo)=> todo.id !== id));
};
    return (
        <div>
          {todos.map((todo) => (
            <li className="todo-list" key={todo.id}>
            {/* <li className="todo-list" key={todo.id}> */}
                <input 
                type= "text" 
                value={todo.title} 
                className="list" 
                onChnage={(event)=> event.preventDefault()} 
                />
                <div class="buttons">
                    <button className = "button-complete-task-button" onClick={()=> handleComplete(todo)}>
                        <i className="fa fa-check-circle">Done</i>
                    </button>
                    <button className="button-delete-task-button" onClick={() => handleDelete(todo)}>
                        <i className="fa fa-trash">Delete</i>          
                    </button>
                </div>
            </li>
          ))}
        </div>
    )
}
export default TodosList;