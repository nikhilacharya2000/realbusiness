import React from "react";
import FiltrationButton from "./FiltrationButton";
import CategoriesPage from "../utils/CategoriesPage";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Featuerd from "./Featuerd";

const TotalCelebrity = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Featuerd/>
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-1">
            <SideBar />
          </div>
          <div class="col-11">
            <img
            
              className="title-img slide-in-bottom"
              src={require("../assests/images/homepage/title-new.jpg")}
            ></img>

            {/* <FiltrationButton /> */}
            <CategoriesPage />
          </div>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default TotalCelebrity;
