import React from 'react';
import MyInputs from '../../UI/inputs/MyInputs';
import '../TodoFilter/TodoFilter.css';

const TodoFilter = ({
  filter,
  sortOrder,
  searchTerm,
  handleFilterChange,
  handleSortOrderChange,
  handleSearchTermChange,
}) => {
  return (
    <div>
      <MyInputs
        type="text"
        placeholder="Search by task title"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div className="filter-dropdown">
        <label htmlFor="filter">Filter tasks: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort Tasks:</label>
        <select id="sort" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="date">By add date</option>
          <option value="completed">By execution status</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
