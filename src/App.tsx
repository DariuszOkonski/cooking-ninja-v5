import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Show from "./pages/show/Show";
import Error from "./components/Error/Error";
import { create, home, search, show, error } from "./endpoints/endpoints";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path={home} element={<Home />} />
            <Route path={create} element={<Create />} />
            <Route path={search} element={<Search />} />
            <Route path={show} element={<Show />} />
            <Route path={error} element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
