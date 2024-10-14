import React from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoPagination from './components/TodoPagination/TodoPagination';
import useApp from './hooks/useApp';
import './styles/App.css';
import './assets/tailwind.css';

function App() {
  const [
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    searchTerm,
    setSearchTerm,
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setPage,
    itemsPage,
    handleFilterChange,
    handleSortOrderChange,
    handleSearchTermChange,
    handlePageClick,
  ] = useApp();

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
        handleFilterChange={handleFilterChange}
        handleSortOrderChange={handleSortOrderChange}
        handleSearchTermChange={handleSearchTermChange}
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
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default App;
