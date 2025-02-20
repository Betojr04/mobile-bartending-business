import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
