import { useEffect, useState } from "react";
import api from "../services/api";

import AddForm from "../components/AddForm";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api
      .get("/api/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();

    const { id } = e.target.dataset;

    api.delete(`/api/items/${id}`).then(() => {
      setItems([...items.filter((item) => item.id !== parseInt(id, 10))]);
    });
  };

  return (
    <>
      <AddForm items={items} setItems={setItems} />
      <div className="d-flex flex-wrap justify-content-center">
        {items.map((item) => (
          <div key={item.id} className="card m-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <button
                onClick={handleDelete}
                type="submit"
                data-id={item.id}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
