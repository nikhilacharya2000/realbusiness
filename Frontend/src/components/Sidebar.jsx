import React from 'react'
import ImageSlider from './ImageSlider'
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import {BsCurrencyRupee } from "react-icons/bs";


const SideBar = () => {
  return (
    <div>
      {/* <ImageSlider/>

      <div class="card transition">
  <h2 class="transition card_head">Awesome Headline</h2>
  <p className='card_pera'>Aenean lacinia bibendum nulla sed consectetur. Donec ullamcorper nulla non metus auctor fringilla.</p>
  <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div>
  <div class="card_circle transition"></div>
</div> */}


<input type="checkbox" id="toggler" />
<aside class="aside-wrapper">
  <h1 class="logo-text"><span>Filter Your Choice</span> <label for="toggler"><i class="fas fa-bars sidebar-toggle"><BsReverseLayoutTextSidebarReverse/></i></label></h1>

  <ul>
    <li><i class="fas fa-home"></i> 

    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Short By
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Popular</a></li>
    <li><a class="dropdown-item" href="#">Lowest Price</a></li>
    <li><a class="dropdown-item" href="#">Highest Price</a></li>
  </ul>
</div></li>





    <li> below-<i ><BsCurrencyRupee/></i>1000</li>
    <li><i><BsCurrencyRupee/></i>1000-<i><BsCurrencyRupee/></i>3000</li>
    <li><i><BsCurrencyRupee/></i>3000-<i><BsCurrencyRupee/></i>10000</li>
    <li><i><BsCurrencyRupee/></i>10000-Above</li>
  </ul>

  <ul>
    <li><i class="fas fa-headset"></i> Get Help</li>
    <li><i class="fas fa-comment"></i> <button className='navbar-login-btn'>Chat With Us</button></li>
  </ul>
</aside>
    





    </div>
  )
}

export default SideBar





// import React, { useState } from 'react';

// const SideBar = ({ applyFilters }) => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const handleApplyFilter = () => {
//     applyFilters(selectedCategory, minPrice, maxPrice);
//   };

//   return (
//     <div>
//       {/* Price Range Filter */}
//       <input
//         type="number"
//         placeholder="Min Price"
//         value={minPrice}
//         onChange={(e) => setMinPrice(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Max Price"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />

//       {/* Category Filter */}
//       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
//         <option value="All">All</option>
//         <option value="Category1">Category 1</option>
//         <option value="Category2">Category 2</option>
//         {/* Add more categories as needed */}
//       </select>

//       <button onClick={handleApplyFilter}>Apply Filters</button>
//     </div>
//   );
// };

// export default SideBar;

