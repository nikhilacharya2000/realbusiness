import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { BiCameraMovie } from "react-icons/bi";
import {FaPeopleGroup} from "react-icons/fa6";
import {BsCameraVideoOff} from "react-icons/bs";
import {BsFillPatchCheckFill} from "react-icons/bs";
import { API_ENDPOINT } from "../constant";
import { useNavigate, useParams } from "react-router-dom";


const removeHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};


const DetailsPage = () => {
  

// carousel
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1472 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1472, min: 1088 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

// carousel



  


  const [celebrityDetails, setCelebrityDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch celebrity details based on the id from the URL
    fetch(`${API_ENDPOINT}celebrity-detail/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data, "hello");
        setCelebrityDetails(data.data);
      })
      .catch((error) => {
        console.error("Error fetching celebrity details:", error);
        // Handle the error state here, e.g., display an error message or redirect to a 404 page
      });
  }, [id]);

  if (!celebrityDetails) {
    // Add loading or error handling UI here while waiting for the API response
    return <div>Loading...</div>;
  }
  const descriptionWithoutTags = removeHtmlTags(celebrityDetails.description);

  return (

<div>

{/* slider */}


<Carousel className="detailpage-slider" responsive={responsive}>
        
<div> 
<div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>
</div>


  <div>
  <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>
</div>



  <div>
  <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>
</div>




  <div>
  <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>


</div>
 <div>
 <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>


</div>

  <div>
  <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>

</div>



  <div>
  <div class="card-detail-page">
<img className="detailpage-img" src={celebrityDetails.image} alt="..." />
  </div>


</div>


  <div>
  
  <div class="title-box">
    <h3 className='featured-h3'>
    SPRING FEVER
    </h3>
    <hr/>
    <div class="intro">
      Yllamco laboris nisi ut aliquip ex ea commodo.
    </div>
  </div>  
  <div class="info">
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</span>
</div>
<div class="footer-featured">
  <div class="icon-holder">
    <span>
  <i class="fa fa-comment-o"></i>
  
    <space></space>
    <i class="fa fa-calendar"></i>
    <span><button className='navbar-login-btn'>Book Now</button></span>
    </span>
  </div>
</div>

<div class="color-overlay"></div>
</div>

</Carousel>;
{/* slider */}

{/* name section */}

<div className="container-fluid">

<p className="detailpage-celebrity-name">{celebrityDetails.name} <BsFillPatchCheckFill/></p>
<p className="detailpage-celebrity-category">{celebrityDetails.category}</p>
<button className="book-celebrity-btn">Book Now</button>

<hr></hr>
</div>
{/* name section */}

{/* Available offers*/}
<p className="detaipage-sub-head">Available offers</p>
<div className="detail-offer-main">
<div className="container available-offer-home ">
  <div>
    <div className="available-offer-1"><img className="percentage-img" src={require("../assests/images/detailpage/percentage.png")}></img>
     <p className="buy-for">Buy For <span className="ofer">Flate {celebrityDetails.offer} Off</span> </p> 
     <div/>
     
  </div>
  <p className="available-offer-pera">Extra $ 800off on
this booking</p>
</div>
</div>

<div className="container available-offer-home ">
  <div>
    <div className="available-offer-1"><img className="percentage-img" src={require("../assests/images/detailpage/percentage.png")}></img>
     <p className="buy-for">Buy For <span className="ofer">Flate {celebrityDetails.offer} Off</span> </p> 
     <div/>
     
  </div>
  <p className="available-offer-pera">Extra $ 800off on
this booking</p>
</div>
</div>
</div>
{/* Available offers*/}


<hr></hr>
{/* review */}
<p className="detaipage-sub-head">Review</p>

<div className="review">

<main class="l-card">
	<section class="l-card__text">
		<p>
			This is a comment card appearing above a dotted background, and that's really cool!
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img className="img-review" src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"/>
		</div>
		<div class="l-card__userInfo">
			<span>Naruto Uzumaki</span>
			<span>Seventh Hokage</span>
		</div>
	</section>
</main>


<main class="l-card">
	<section class="l-card__text">
		<p>
			This is a comment card appearing above a dotted background, and that's really cool!
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img className="img-review" src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"/>
		</div>
		<div class="l-card__userInfo">
			<span>Naruto Uzumaki</span>
			<span>Seventh Hokage</span>
		</div>
	</section>
</main>


<main class="l-card">
	<section class="l-card__text">
		<p>
			This is a comment card appearing above a dotted background, and that's really cool!
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img className="img-review" src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"/>
		</div>
		<div class="l-card__userInfo">
			<span>Naruto Uzumaki</span>
			<span>Seventh Hokage</span>
		</div>
	</section>
</main>


<main class="l-card">
	<section class="l-card__text">
		<p>
			This is a comment card appearing above a dotted background, and that's really cool!
		</p>
	</section>
	<section class="l-card__user">
		<div class="l-card__userImage">
			<img className="img-review" src="https://avatars.githubusercontent.com/u/20525486?v=4" alt="Naruto"/>
		</div>
		<div class="l-card__userInfo">
			<span>Naruto Uzumaki</span>
			<span>Seventh Hokage</span>
		</div>
	</section>
</main>
</div>
{/* review */}


{/* about section */}
<p className="detaipage-sub-head">About {celebrityDetails.name}</p>
<div>{descriptionWithoutTags}</div>
{/* <div>
{ celebrityDetails.description}
</div> */}
{/* about section */}

      </div>

  );
};

export default DetailsPage;

