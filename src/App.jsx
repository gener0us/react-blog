import React from "react";
import HomePage from "./components/Home/HomePage";
import Blogs from "./components/blog/Blogs";
import BlogPage from "./components/blog/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
      <Route path="/blog/:id" element={<BlogPage/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}