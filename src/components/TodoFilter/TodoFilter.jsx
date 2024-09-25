import React from 'react';
import MyInputs from '../../UI/inputs/MyInputs';
import '../TodoFilter/TodoFilter.css';

const TodoFilter = ({
  filter,
  setFilter,
  sortOrder,
  setSortOrder,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div>
      <MyInputs
        type="text"
        placeholder="Search by task title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="filter-dropdown">
        <label htmlFor="filter">Filter tasks: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incompleted</option>
        </select>
      </div>
      <div className="sort-dropdown">
        <label htmlFor="sort">Sort Tasks:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="date">By add date</option>
          <option value="completed">By execution status</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
