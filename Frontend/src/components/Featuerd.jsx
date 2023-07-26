import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featuerd = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1472 },
          items: 5
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
      
 
  return (
    <div className='featuerd-body'>
      <div className='featured-head-section'>
      <p className='featuerd-cel-head' >Featured Celebrities</p>
    <img className='arrow-img heartbeat' src={require("../assests/images/homepage/arrow.png")}></img>
    </div>

      <Carousel responsive={responsive}>
        
  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/akshay.jpg")}></img>

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
</div></div>



  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/alia.jpg")}></img>
  
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
</div></div>



  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/jackline.jpg")}></img>
  
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
</div></div>




  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/karina.jpg")}></img>
  
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
</div></div>
 <div><div class="blog">
 <img className='images' src={require("../assests/images/CardsImage/karina.jpg")}></img>
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
</div></div>

  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/karina.jpg")}></img>
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
</div></div>



  <div><div class="blog">
  <img className='images' src={require("../assests/images/CardsImage/karina.jpg")}></img>
  
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
</div></div>


  <div><div class="blog">
  
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
</div></div>

</Carousel>;
<hr className='featured-hr'></hr>
    </div>
  )
}

export default Featuerd
