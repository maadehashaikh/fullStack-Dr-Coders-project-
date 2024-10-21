import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
