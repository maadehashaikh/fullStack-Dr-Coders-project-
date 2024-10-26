import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8082/api/user/login",
      formData
    );
    console.log(response);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      toast.success(response.data.message);
      navigate("/add");
    }
    // console.log(response.data);
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center ">
      <h1 className="mt-3">Login To Blog App ✍</h1>
      <Form
        onSubmit={onSubmit}
        className="mt-5 bg-slate-400 w-auto p-3 rounded"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-bold text-xl">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-bold text-xl">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="ml-24">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
