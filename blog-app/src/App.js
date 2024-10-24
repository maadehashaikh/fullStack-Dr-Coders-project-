import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Pages/Update";

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/blog/:id" element={<Update />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
