import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import useTodos from './hooks/useTodos';
import useFilter from './hooks/useFilter';
import './styles/App.css';

function App() {
  const [todos, addTodo, toggleTodo, deleteTodo, editTodo] = useTodos();
  const [
    sortedTodos,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    searchTerm,
    setSearchTerm,
  ] = useFilter(todos);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <TodoList
        todos={sortedTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
