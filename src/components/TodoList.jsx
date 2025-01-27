import React from 'react'
import { useState } from 'react'

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Clean the house", completed: false },
    { id: 3, text: "Go for a run", completed: false },
    { id: 4, text: "Finish homework", completed: false },
    { id: 5, text: "Call mom", completed: false },
    { id: 6, text: "Buy groceries", completed: false },
    { id: 7, text: "Walk the dog", completed: false },
    { id: 8, text: "Read a book", completed: false },
    { id: 9, text: "Do laundry", completed: false },
    { id: 10, text: "Write code", completed: false },
  ];

export const TodoList = () => {
    

      const [todos, setTodos] = useState(SAMPLE_TODOS);

      const [newTodo, setNewTodo] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();

        if (!newTodo.trim()) {
            return;
        }

        setTodos([...todos, { id: crypto.randomUUID(), text: newTodo, completed: false }]);
        setNewTodo("");
      };

      const handleInputChange = (e) => {
        setNewTodo(e.target.value)
      }

      const handleTogglecompleted = (id) => {
        const updatedTodos = todos.map((todo) => 
            todo.id === id ? { ...todo,completed: !todo.completed }: todo
        );
        
        setTodos(updatedTodos);
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            />
            <button type='submit'>추가하기</button>
        </form>
        <ul>
        {todos.map(({ id, text, completed }) => (
            <li key={id}>
                <p
                    style={{
                        textDecoration: completed ? "line-through" : "none"
                    }}
                >{text}</p>
                <button onClick={() => handleTogglecompleted(id)}>{completed ? "취소하기" : "완료하기"}</button>
                </li>
        ))}
        </ul>
    </div>
    
  )
}

export default TodoList;
