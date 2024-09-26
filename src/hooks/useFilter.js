import { useState, useMemo } from 'react';

const useFilter = (todos) => {
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'incomplete') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  const sortedTodos = useMemo(() => {
    return [...filteredTodos].sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : 0;
      const dateB = b.date ? new Date(b.date) : 0;

      if (sortOrder === 'date') {
        return dateA - dateB;
      }
      if (sortOrder === 'completed') {
        return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
      }
      return 0;
    });
  }, [filteredTodos, sortOrder]);

  return [
    sortedTodos,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    searchTerm,
    setSearchTerm,
    handleFilterChange,
    handleSortOrderChange,
    handleSearchTermChange,
  ];
};

export default useFilter;
