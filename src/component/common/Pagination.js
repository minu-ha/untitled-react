import React from 'react';

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={'pagination'}>
        {pageNumbers.map((num) => (
          <li key={num}>
            <a
              onClick={() => {
                paginate(num);
              }}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
