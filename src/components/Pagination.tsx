import React from 'react';
import { PaginationProps } from '../models/PaginationProps';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
    const maxPagesToShow = 1;
    const half = Math.floor(maxPagesToShow / 2);

    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, currentPage + half);

    if (endPage - startPage + 1 < maxPagesToShow) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      } else {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
    }

    const pages = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => onPageChange(typeof page === 'number' ? page : currentPage)}
        className={`px-4 py-2 rounded-md ${
          typeof page === 'number' && page === currentPage
            ? 'bg-purple-600 text-white'
            : 'bg-transparent hover:bg-purple-400'
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 bg-transparent rounded-md hover:bg-purple-500 disabled:opacity-50"
      >
        Prev
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 bg-transparent rounded-md hover:bg-purple-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;