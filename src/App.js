import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoPagination from './components/TodoPagination/TodoPagination';
import useTodos from './hooks/useTodos';
import useFilter from './hooks/useFilter';
import usePagination from './hooks/usePagination';
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

  const itemsPage = 3;
  const [currentItems, currentPage, totalPages, nextPage, prevPage, setPage] =
    usePagination(sortedTodos, itemsPage);

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
        todos={currentItems}
        currentPage={currentPage}
        itemsPage={itemsPage}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      <TodoPagination
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
