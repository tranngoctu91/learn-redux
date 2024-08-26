import { Route, Router, Routes } from "react-router-dom";
import Account from "./components/Account.jsx";
import Blog from "./components/Blog.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </>
  );
}

export default App;
