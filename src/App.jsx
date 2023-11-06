import HomePage from "./components/Home/HomePage";
import Blogs from "./components/blog/Blogs";
import BlogPage from "./components/blog/BlogPage";
import Users from "./components/users/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/blogs/:id" element={<BlogPage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
