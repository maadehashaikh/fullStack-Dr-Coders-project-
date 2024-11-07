import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Add from "./Pages/Add";
import List from "./Pages/List";
import Login from "./Pages/Login";
import Update from "./Pages/Update";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token && location.pathname !== "/login") {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {token && <Navbarr />}
      <Routes>
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/home" />}
        />

        <Route
          path="/add"
          element={token ? <Add /> : <Navigate to="/login" />}
        />
        <Route
          path="/list"
          element={token ? <List /> : <Navigate to="/login" />}
        />
        <Route
          path="/blog/:id"
          element={token ? <Update /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
