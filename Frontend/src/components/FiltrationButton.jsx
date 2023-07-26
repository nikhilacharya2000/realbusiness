import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../constant";

const FiltrationButton = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}categories`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div>
      <nav className="nav-horizontal center">
        <div className="mask">
          <ul className="list">
            {categories.map((category) => (
              <li key={category.id}>
                <button className="filter-btn" href="#">
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FiltrationButton;
