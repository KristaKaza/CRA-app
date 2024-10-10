import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      newErrors.body = "Message body must be at least 3 characters long.";
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
      console.log("Form submitted successfully:", formData);
      // Clear the form
      setFormData({ fullName: "", subject: "", email: "", body: "" });
    }
  };

  return (
    <div className="container mt-5 contact-page">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.body ? "is-invalid" : ""}`}
            id="body"
            name="body"
            rows="4"
            value={formData.body}
            onChange={handleChange}
            required
          ></textarea>
          {errors.body && <div className="invalid-feedback">{errors.body}</div>}
        </div>

        <button type="submit" className="btn d-grid mx-auto col-12 submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
