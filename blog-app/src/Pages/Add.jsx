import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from axios;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:8082/api/blog",formData);
    if(response.data.success){
      setFormData({
        title: "",
        description: ""
      })
      Toast
    }
  };
  return (
    <div className="bg-slate-500 h-screen">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label className="font-bold text-2xl p-2">
            Blog Title{" "}
          </Form.Label>
          <Form.Control
            className="p-3 border-2 border-black"
            type="text"
            placeholder="Enter Your Email Here 🙂"
            name="title"
            value={title}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="font-bold text-2xl p-2">
            Enter Your Description Here ✍
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            className="border-2 border-black"
            name="description"
            value={description}
            onChange={onChange}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Add;
