import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Update = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8082/api/blog/${params.id}`
    );
    // console.log(response.data.blog); // empty h
    setFormData(response.data.blog);
  };
  console.log(formData);
  useEffect(() => {
    fetchData();
  }, []);

  const { title, description } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:8082/api/blog/${params.id}`,
      formData
    );
    if (response.data.success) {
      setFormData({
        title: "",
        description: "",
      });
      toast.success(response.data.message);
      navigate("/list");
    }
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label className="font-bold text-2xl p-2">
            Blog Title{" "}
          </Form.Label>
          <Form.Control
            className="p-3 border-2 border-black"
            type="text"
            placeholder="Enter Your Title Here 💌"
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

export default Update;
