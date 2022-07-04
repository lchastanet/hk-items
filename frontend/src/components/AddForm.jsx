import React, { useState } from "react";
import api from "../services/api";

/* eslint react/prop-types: 0 */
function AddForm({ items, setItems }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length >= 3) {
      api
        .post("/api/items", { title })
        .then((res) => {
          setItems([...items, res.data]);
        })
        .catch((err) => console.error(err));
    } else {
      alert("Enter a correct item");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "18rem" }}
      className="m-auto my-5"
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Item
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
}

export default AddForm;
