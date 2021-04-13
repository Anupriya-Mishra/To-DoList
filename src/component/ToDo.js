import React from "react";
import Do from "./Do";

const ToDo=({todos,setTodos,filteredTodos}) =>{
    
    return (
        <div className="todo-container">
      <ul className="todo-list">
      {filteredTodos.map((todo) =>(
              <Do setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />
          ))}
      </ul>
    </div>
    );
}
export default ToDo;