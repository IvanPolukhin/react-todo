import React from 'react';
import '../TodoPagination/TodoPagination.css';

const TodoPagination = ({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  handlePageClick,
}) => {
  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => handlePageClick(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default TodoPagination;
