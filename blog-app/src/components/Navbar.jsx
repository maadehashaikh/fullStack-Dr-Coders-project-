import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbarr = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logout successfully");
  };

  const goToSignup = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <div>
      <Navbar className="bg-slate-400">
        <Container className="w-full text-center">
          <Navbar className="text-2xl font-bold ">My Blog App</Navbar>
          <Nav className=" ml-80 gap-8 ">
            <Nav.Link href="/home" className="text-black font-bold mt-2">
              Home
            </Nav.Link>
            <Nav.Link href="/add" className="text-black font-bold mt-2">
              Add Blog
            </Nav.Link>
            <Nav.Link href="/list" className="text-black font-bold mt-2">
              List Blog
            </Nav.Link>
            <Button className="btn btn-danger ml-32 " onClick={logout}>
              Logout
            </Button>
            <Button className="btn btn-primary ml-2" onClick={goToSignup}>
              Sign Up
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
