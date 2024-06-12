import React from 'react';

const Pagination =  ({ currentPage, totalPages, onPageChange } : {
  currentPage:number , totalPages : number, onPageChange:any
}) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10 dark:text-white">
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#" onClick={() => onPageChange(currentPage - 1)} className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}>
              <h2>Previous</h2>
            </a>
          </li>
          {generatePageNumbers().map((page, index) => (
            <li key={index} className={`${page === currentPage ? 'active' : ''}`}>
              {typeof page === 'number' ? (
                <a href="#" onClick={() => onPageChange(page)} className={`${page === currentPage ? ' text-yellow-300' : ''}`}>
                  <h2 className={`h-7 w-7 flex items-center justify-center ${page === currentPage ? ' bg-blue-500 rounded-sm' : ''}`}>{page}</h2>
                </a>
              ) : (
                <span className="inline-block px-3">...</span>
              )}
            </li>
          ))}
          <li>
            <a href="#" onClick={() => onPageChange(currentPage + 1)} className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}>
              <h2>Next</h2>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
