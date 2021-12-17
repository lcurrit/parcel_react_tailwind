import React from 'react';

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div className="flex justify-around my-4">
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
