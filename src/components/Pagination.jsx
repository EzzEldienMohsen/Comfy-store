import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Pagination = () => {
  var { meta } = useLoaderData();
  var page = meta.pagination.page;
  var pageCount = meta.pagination.pageCount;

  var pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  var { search, pathname } = useLocation();
  var navigate = useNavigate();
  var handlePageChange = (pageNumber) => {
    var searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            var prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          prev
        </button>
        {pages.map((pn) => {
          return (
            <button
              key={pn}
              onClick={() => handlePageChange(pn)}
              className={`btn btn-xs join-item sm:btn-md border-none ${
                pn === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pn}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            var nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
