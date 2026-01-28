import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const submitForm = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      alert("All fields are required");
      return;
    }
    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={submitForm}>
      <input className="form-control mb-3" placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input className="form-control mb-3" placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <textarea className="form-control mb-3" placeholder="Message"
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      <button className="btn btn-primary">Send</button>
    </form>
  );
};

export default ContactForm;
