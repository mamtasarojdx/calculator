import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {BsFillPencilFill} from "react-icons/bs";
import "./ToDoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
 

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todoText.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoText('');
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
    <section class="vh-100">
  <div class="container py-5 h-100 " id='todo-class'>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
      <div class="card-body py-0 px-1 px-md-5">

            <p class="h1 text-center mb-4  pb-3 text-primary">
              <i class="fa fa-check-square px-3"></i>
              <u>My Todo-s</u>
            </p>
      <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} id='input-text'/>
      <button onClick={addTodo} id='add-btn'>Add Todo</button>
      <div>
        <div></div>
        </div>
        <hr className='my-4'/>
      <div>
        {todos.map(todo => (
          <h5 key={todo.id}>
            <div class="form-check">
                  <input class="form-check-input d-flex align-items-center me-0" type="checkbox" id="checkbox-1" checked={todo.completed} onChange={() => toggleComplete(todo.id)}
                  />
                </div>
      
          
            <span class="list-group-item  d-flex align-items-center flex-grow-1 border-0 bg-transparent  " id='result'   style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>

            <h4 className='d-flex justify-content-end'>
            <BsFillPencilFill onClick={() => editTodo(todo.id, prompt('Edit todo', todo.text))} className='edit-btn'/>
            <RiDeleteBin6Line onClick={() => deleteTodo(todo.id)} className='delete-btn'/></h4>
           
          </h5>
        ))}
        </div>
      </div> </div> </div> </div>
      </section>
    
    </>
  );
};

export default TodoList;