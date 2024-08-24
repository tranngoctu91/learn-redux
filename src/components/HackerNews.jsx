import axios from "axios";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../sagas/news/newSlice";

const HackerNews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const { hits, loading } = useSelector((state) => state.news);
  console.log(hits);
  return (
    <div>
      <div>
        <input
          id="txt-query"
          type="text"
          defaultValue=""
          //   onChange={handleSetValue}
        />
        <button id="btn-fetch">Fetch</button>
      </div>

      <div>{loading && <p>Loading...</p>}</div>

      <div>{!loading && hits.map((s, i) => <p key={i}>{s.title}</p>)}</div>
    </div>
  );
};

export default HackerNews;
