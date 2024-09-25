import { useState } from 'react';

const useFilter = (todos) => {
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'incomplete') return !todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date();
    const dateB = b.date ? new Date(b.date) : new Date();

    if (sortOrder === 'date') {
      return dateA - dateB;
    }
    if (sortOrder === 'completed') {
      return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
    }
    return 0;
  });

  return [
    sortedTodos,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
    searchTerm,
    setSearchTerm,
  ];
};

export default useFilter;
