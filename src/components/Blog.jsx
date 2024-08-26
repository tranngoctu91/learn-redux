import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogRequest } from "../services/blogs/blogSlice";

import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const page = queryParams.get("p") !== null ? Number(queryParams.get("p")) : 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, total, loading } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlogRequest({ pageIndex: page - 1, pageSize: 3 }));
  }, [dispatch]);
  const handlePageClick = ({ selected }) => {
    dispatch(getBlogRequest({ pageIndex: selected, pageSize: 3 }));
    navigate(`${location.pathname}?p=${selected + 1}`);
  };
  return (
    <div>
      <div>
        {loading && "Loading..."}
        {data && data.map((s) => <p key={s.blogId}>{s.tittle}</p>)}
      </div>
      {total !== 0 && (
        <ReactPaginate
          previousLabel={"Pre"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(total / 3)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center"}
          pageClassName={"p-3 border border-grey"}
          pageLinkClassName={"page-link"}
          previousClassName={"p-3"}
          nextClassName={"p-3"}
          breakClassName={"break-item"}
          activeClassName={"bg-blue-500"}
          forcePage={page - 1}
        />
      )}
    </div>
  );
};

export default Blog;
