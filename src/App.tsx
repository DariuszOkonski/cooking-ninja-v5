import "./App.css";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Show from "./pages/show/Show";

function App() {
  return (
    <div className="App">
      <Create />
      <Home />
      <Search />
      <Show />
    </div>
  );
}

export default App;
