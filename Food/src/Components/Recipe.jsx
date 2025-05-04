import React, { useState } from "react";
import Products from "./Products";
import "../App.css";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const YOUR_APP_ID = "69c23e4a";
  const YOUR_APP_KEY = "4592f6f6e15ad9f1da3d04ebb3f21e56";

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.hits || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">🍽️ Delicious Recipes Finder</h2>
        <p className="text-muted">Search for healthy and tasty meals</p>
      </div>
      <form className="input-group mb-5" onSubmit={SubmitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for recipes (e.g. chicken, pasta)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-success" role="status" />
        </div>
      )}

      {!loading && data.length === 0 && (
        <div className="text-center text-muted">No recipes found.</div>
      )}

      {!loading && data.length > 0 && <Products data={data} />}
    </div>
  );
};

export default Recipe;
