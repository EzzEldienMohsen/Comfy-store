/* eslint-disable no-unused-vars */
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const PaginationComplexOne = () => {
  var { meta } = useLoaderData()
  var page = meta.pagination.page
  var pageCount = meta.pagination.pageCount

  var { search, pathname } = useLocation()
  var navigate = useNavigate()
  var handlePageChange = (pageNumber) => {
    var searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }
  var addPageButtons = ({ pn, activeClass }) => {
    return (
      <button
        key={pn}
        onClick={() => handlePageChange(pn)}
        className={`btn btn-xs join-item sm:btn-md border-none ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
      >
        {pn}
      </button>
    )
  }
  var renderPageButtons = () => {
    var pageButtons = []
    // first button
    pageButtons.push(addPageButtons({ pn: 1, activeClass: page === 1 }))
    // first dot button
    if (page > 3) {
      pageButtons.push(
        <button
          key="dot-1"
          className="btn btn-xs join-item sm:btn-md border-none"
        >
          ...
        </button>
      )
    }
    // before active button
    if (page > 2) {
      pageButtons.push(addPageButtons({ pn: page - 1, activeClass: false }))
    }
    // active button
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButtons({ pn: page, activeClass: true }))
    }
    //after active button
    if (page < pageCount - 1) {
      pageButtons.push(addPageButtons({ pn: page + 1, activeClass: false }))
    }
    // after dot button
    if (page < pageCount - 3) {
      pageButtons.push(
        <button
          key="dot-2"
          className="btn btn-xs join-item sm:btn-md border-none"
        >
          ...
        </button>
      )
    }
    // last button
    pageButtons.push(
      addPageButtons({ pn: pageCount, activeClass: page === pageCount })
    )
    return pageButtons
  }
  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            var prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage)
          }}
        >
          prev
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            var nextPage = page + 1
            if (nextPage > pageCount) nextPage = 1
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationComplexOne
