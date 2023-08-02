import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Pass the search query to the parent component
  };

//
const handleButtonClick = () => {
  if (searchQuery) {
    // Use the history.push method to navigate to CategoriesPage with the search query as a parameter
    // The `push` method should include the search query as a parameter in the URL
    // Here, we're using a template literal to add the search query to the URL
    history.push(`/categories?q=${encodeURIComponent(searchQuery)}`);
  } else {
    // Handle case when search query is empty
  }
};
// 

  

  return (
    <div>
           
    <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 pt-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="#"><i className="fa-solid fa-shop me-2"></i> <strong>Real-Business</strong></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          {/* <div className="input-group">
            <span className="border-danger input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
            <button className="btn text-white search-btn-nav">Search</button>
          </div> */}

<div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
        <div className="input-group">
          <span className="border-danger input-group-text bg-warning text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input 
          
            type="text"
            className="form-control border-warning"
            style={{ color: '#7a7a7a' }}
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search celebrities"
          />
          <button className="btn text-white search-btn-nav" onClick={handleButtonClick}>Search</button>
        </div>
      </div>


        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">



        <div className="input-group">
          <span className="border-danger input-group-text bg-warning text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="form-control border-warning"
            style={{ color: '#7a7a7a' }}
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search celebrities"
            
          />
          <button className="btn text-white search-btn-nav" onClick={handleButtonClick}>Search</button>
        </div>
          {/* <div className="ms-auto d-none d-lg-block">
            <div className="input-group">
              <span className=" input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control border-warning" style={{color:"#7a7a7a"}}/>
              <button className="btn text-white search-btn-nav">Search</button>
            </div>
          </div> */}


          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link mx-2 text-uppercase active" aria-current="page" to="/deta">HOME</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2 text-uppercase" to="/celebrities">CELEBRITIES</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-2 text-uppercase" to="/categories">CATEGORIES</NavLink>
            </li>
           
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link mx-2 text-uppercase" to="/loginsignup"><button className='navbar-login-btn '>Login !</button></NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink className="nav-link mx-2 text-uppercase" to="#"><i className="fa-solid fa-circle-user me-1"></i> SIGNUP</NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
