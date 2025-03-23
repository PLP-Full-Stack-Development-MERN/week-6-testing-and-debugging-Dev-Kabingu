import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BugForm = () => {
  const [bug, setBug] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bugs", bug);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={bug.title} required
        onChange={(e) => setBug({ ...bug, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={bug.description}
        onChange={(e) => setBug({ ...bug, description: e.target.value })}
        required
      ></textarea>
      <button type="submit">Submit Bug</button>
    </form>
  );
};

export default BugForm;
