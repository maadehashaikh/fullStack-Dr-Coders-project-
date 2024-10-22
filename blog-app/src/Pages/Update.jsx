import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  // Fetch blog data by ID
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8082/api/blog/${params.id}`
      );
      console.log("API Response:", response);
      // Check if the response contains blog data
      if (response.data.blog) {
        setFormData({
          title: response.data.blog.title || "",
          description: response.data.blog.description || "",
        });
      } else {
        console.error("Blog data not found");
        toast.error("Blog data not found");
      }
    } catch (error) {
      console.error("Error fetching the blog data:", error);
      toast.error("Failed to fetch blog data");
    }
  };

  // Log formData only after it is updated
  useEffect(() => {
    fetchData();
  }, [params.id]);

  useEffect(() => {
    console.log("Updated formData:", formData); // Logs the formData once it is updated
  }, [formData]); // This will trigger whenever formData is updated

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8082/api/blog/${params.id}`, // Pass the blog ID to update
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
    } catch (error) {
      console.error("Error updating the blog:", error);
      toast.error("Failed to update the blog");
    }
  };

  const { title, description } = formData;

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label className="font-bold text-2xl p-2">Blog Title</Form.Label>
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
