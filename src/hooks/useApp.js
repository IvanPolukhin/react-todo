import useTodos from './useTodos';
import useFilter from './useFilter';
import usePagination from './usePagination';
import useTheme from './useTheme';

const useApp = () => {
  const [todos, addTodo, toggleTodo, deleteTodo, editTodo] = useTodos();
  const [
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
  ] = useFilter(todos);

  const itemsPage = 3;
  const [
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setPage,
    handlePageClick,
  ] = usePagination(sortedTodos, itemsPage);

  const { isDarkMode, toggleTheme } = useTheme();

  return [
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
    isDarkMode,
    toggleTheme,
  ];
};

export default useApp;
