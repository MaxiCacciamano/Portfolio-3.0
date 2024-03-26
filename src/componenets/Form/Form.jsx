import React, { useState } from "react";
import "./form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    // const { name, value } = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="form">
      <div className="info">
        <h1>Contact.</h1>
        <div className="line3"></div>
        <p>
          I would love to hear you project and how i could help. Please fill in
          the form, and i'll get back to you as soon as possible
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <input
              placeholder="Nombre"
              type="text"
              name="name"
              value={formData.name}
              onChange={e=>handleChange(e)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={e=>handleChange(e)}
              required
            />
            <textarea
              type="text"
              className="message"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={e=>handleChange(e)}
              required
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
