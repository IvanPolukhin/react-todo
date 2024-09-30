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
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`pagination-btn ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default TodoPagination;
