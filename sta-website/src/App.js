
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Blog from "./routes/blog";
import Products from "./routes/products";
import Services from "./routes/services";
import Page1 from "./routes/BlogPosts/page-1";
import Page2 from "./routes/BlogPosts/page-2";
import Page3 from "./routes/BlogPosts/page-3";
import Page4 from "./routes/BlogPosts/page-4";
import Page5 from "./routes/BlogPosts/page-5";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products />}/>
          <Route path="/page-1" element={<Page1/>}/>
          <Route path="/page-2" element={<Page2 />}/>
          <Route path="/page-3" element={<Page3 />}/>
          <Route path="/page-4" element={<Page4 />}/>
          <Route path="/page-5" element={<Page5 />}/>
        </Routes>
    </div>
  );
}

export default App;
