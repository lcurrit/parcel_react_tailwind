import React from 'react';

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div>
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
