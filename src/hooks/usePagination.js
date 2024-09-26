import { useState } from 'react';

export const usePagination = (items, itemsPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPage,
    currentPage * itemsPage,
  );

  const handlePageClick = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const setPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return [
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setPage,
    handlePageClick,
  ];
};

export default usePagination;
