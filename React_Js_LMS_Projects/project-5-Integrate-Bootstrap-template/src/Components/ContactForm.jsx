import { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.message) {
      setError("All fields are required");
      return;
    }

    setError(""); 
  };

  return (
    <div className="border border-1 border-black p-4 rounded-3 w-50 mx-auto">
      <form onSubmit={submitForm} className="my-4 w-75 mx-auto">
        {error && <p className="text-danger">{error}</p>}

        <input
          className="form-control mb-3 py-2"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="form-control mb-3 py-2"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <textarea
          className="form-control mb-3 py-2"
          placeholder="Message"
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <button className="btn btn-primary w-100 fs-5 fw-bold">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
