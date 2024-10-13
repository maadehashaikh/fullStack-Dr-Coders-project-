import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
