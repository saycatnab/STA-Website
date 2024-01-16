
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from "./routes/home";
import About from "./routes/about";
import Blog from "./routes/blog";
import Products from "./routes/products";
import Services from "./routes/services";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products />}/>
        </Routes>
    </div>
  );
}

export default App;
