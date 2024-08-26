import { Route, Router, Routes } from "react-router-dom";
import Account from "./components/Account.jsx";
import Blog from "./components/Blog.jsx";
import Categories from "./components/Categories.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Account></Account>}></Route>
        <Route element={<ProtectedRoute></ProtectedRoute>}>
          <Route path="/cate" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
