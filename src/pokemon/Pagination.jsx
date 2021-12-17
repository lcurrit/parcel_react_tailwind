import React from 'react';

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div className="flex justify-around max-w-lg mx-auto">
      {gotoPrevPage && (
        <button className="btn" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button className="btn" onClick={gotoNextPage}>
          Next
        </button>
      )}
    </div>
  );
}
