import { useState, useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from '../assets/keys';

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEYS);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      localStorage.setItem(LOCAL_STORAGE_KEYS, JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const addTodo = (title, text) => {
    setTodos([...todos, { id: Date.now(), title, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTitle, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, text: newText } : todo,
      ),
    );
  };

  return [todos, addTodo, toggleTodo, deleteTodo, editTodo];
};

export default useTodos;
