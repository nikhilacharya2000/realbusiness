// import React, { useEffect, useState } from 'react'
//  const CategoriesPage = () => {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.0.103:80/api/celebrity')
//       .then(response => response.json())
//       .then(data => {
//         setData(data.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>

//       <div className='container'>
//                  <div className='row '>

// {/* card start */}
// {
//   data.map((item)=>{
//     return(

// <div className="product-card ">
// 		<div className="badge">Hot</div>
// 		<div className="product-tumb">
// 			<img src={item.image} alt=""/>
// 		</div>
// 		<div className="product-details">
// 			<span className="product-catagory">{ item.category}</span>
// 			<h4><a href={`/detail/${item.id}`}>{item.name}</a></h4>

// 			<div className="product-bottom-details">
// 				<div className="product-price"><button className='navbar-login-btn'>Book Now</button></div>

// 			</div>
// 		</div>
// 	</div>

// )

//   })
// }

// {/* card start */}
// </div>

// </div>

//     </div>
//   )
// }

// export default CategoriesPage

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { API_ENDPOINT } from "../constant";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch categories
    fetch(`${API_ENDPOINT}categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Fetch celebrities
    fetch(`${API_ENDPOINT}celebrity`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setFilteredData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(data);
    } else {
      const filteredCelebrities = data.filter(
        (item) => item.category === category,
      );
      setFilteredData(filteredCelebrities);
    }
  };

  return (
    <div>
      <div className="nav-horizontal center">
        <div className="mask">
          <ul className="list">
            <li>
              <button
                className={`filter-btn ${
                  selectedCategory === "All" ? "active" : ""
                }`}
                onClick={() => handleCategoryFilter("All")}>
                All
              </button>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  className={`filter-btn ${
                    selectedCategory === category.title ? "active" : ""
                  }`}
                  onClick={() => handleCategoryFilter(category.title)}>
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {filteredData.map((item) => (
            <div className="product-card" key={item.id}>
              {/* Render celebrity card content here */}
              <div className="badge">Hot</div>
              <div className="product-tumb">
                <img src={item.image} alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">{item.category}</span>

                <h4>
                  <NavLink to={`/celebrities/${item.id}`}>{item.name}</NavLink>
                </h4>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <button className="navbar-login-btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

// /detail/${item.id}
