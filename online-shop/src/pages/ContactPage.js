// ContactPage.js
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const { fullName, subject, email, body } = formData;

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }
    if (subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email must be a valid email address.";
    }
    if (body.trim().length < 3) {
      newErrors.body = "Body must be at least 3 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Here, you would typically send formData to your API
      console.log("Form submitted successfully:", formData);
      // Clear the form
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          ></textarea>
          {errors.body && <span className="error">{errors.body}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
