import React, { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({
  currentPage,
  totalCount,
  pageSize,
  onPageChange,
}: PaginationProps): JSX.Element => {
  if (totalCount === 0) return <div></div>;
  if (currentPage === 0 && totalCount <= pageSize) return <div></div>;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const nums: number[] = Array.from(
    { length: totalPages },
    (value, key) => key + 1
  );

  return (
    <div className="flex justify-center gap-4 bg-white p-8 sticky bottom-0">
      <div className="flex flex-wrap gap-4">
        <div className="border border-gray-400">
          <span className="px-4 py-2">Page</span>
          <button
            className="px-4 py-2 border-l border-gray-400"
            onClick={onPrevious}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {nums.map((number: number) => (
            <button
              key={number}
              className={`px-4 py-2 border-l border-gray-400 ${
                currentPage === number && "bg-sky-500 text-white"
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="px-4 py-2 border-l border-gray-400"
            onClick={onNext}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
