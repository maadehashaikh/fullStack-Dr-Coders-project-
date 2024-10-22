import React from "react";

const Update = () => {
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
