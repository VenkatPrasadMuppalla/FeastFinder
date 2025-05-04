import React from "react";
import "../App.css";

const Products = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => {
        const { label, image, calories, url, cuisineType, mealType } =
          item.recipe;

        return (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                className="card-img-top"
                src={image}
                alt={label}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title">{label}</h5>
                <p className="card-text text-muted mb-2">
                  {cuisineType?.[0]?.toUpperCase()} |{" "}
                  {mealType?.[0]?.toUpperCase()}
                </p>
                <p className="card-text">Calories: {Math.round(calories)}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success mt-auto"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
