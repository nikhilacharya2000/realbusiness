// import React from 'react';
// import { BiCameraMovie } from "react-icons/bi";
// import {FaPeopleGroup} from "react-icons/fa6";
// import {BsCameraVideoOff} from "react-icons/bs";
// const DetailsPage = () => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
//           <div className="card border-0 shadow">
//             <img src={require("../assests/images/CardsImage/alia.jpg")} alt="..." />
//             <div className="card-body p-1-9 p-xl-5">
//               <div className="mb-4">
//                 <h3 className="h4 mb-0">Alia Bhatt</h3>
//                 <span className="text-primary">Actress</span>
//               </div>

//             </div>
//           </div>
//         </div>
//         <div className="col-lg-8">
//           <div className="ps-lg-1-6 ps-xl-5">
//             <div className="mb-5 wow fadeIn">
//               <div className="text-start mb-1-6 wow fadeIn">
//                 <h2 className="h1 mb-0 text-primary">About Alia</h2>
//               </div>
//               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
//               <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//             </div>
//             <div className="mb-5 wow fadeIn">
//               <div className="text-start mb-1-6 wow fadeIn">
//                 <h2 className="mb-0 text-primary">Request for</h2>
//               </div>
//               <div className="row mt-n4">
//                 <div className="col-sm-6 col-xl-4 mt-4">
//                   <div className="card text-center border-0 rounded-3">
//                     <div className="card-body">
//                       <i className="ti-bookmark-alt icon-box medium rounded-3 mb-4"><BiCameraMovie/></i>
//                       <h3 className="h5 mb-3">Personlised Vedio msg</h3>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-xl-4 mt-4">
//                   <div className="card text-center border-0 rounded-3">
//                     <div className="card-body">
//                       <i className="ti-pencil-alt icon-box medium rounded-3 mb-4"> <FaPeopleGroup/></i>
//                       <h3 className="h5 mb-3">Meet And Greet</h3>

//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-xl-4 mt-4">
//                   <div className="card text-center border-0 rounded-3">
//                     <div className="card-body">
//                       <i className="ti-medall-alt icon-box medium rounded-3 mb-4"><BsCameraVideoOff/></i>
//                       <h3 className="h5 mb-3">Video Call</h3>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             </div>
//           </div>
//         </div>
//       </div>

//   );
// };

// export default DetailsPage;

import React, { useEffect, useState } from "react";

import { API_ENDPOINT } from "../constant";
import { useNavigate, useParams } from "react-router-dom";
const DetailsPage = () => {
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

  return (
    <div className="container">
      <div className="row justify-content-center">
        {/* Render celebrity details content here */}
        <div className="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
          <div className="card border-0 shadow">
            <img src={celebrityDetails.image} alt="..." />
            <div className="card-body p-1-9 p-xl-5">
              <div className="mb-4">
                <h3 className="h4 mb-0">{celebrityDetails.name}</h3>
                <span className="text-primary">
                  {celebrityDetails.category}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="ps-lg-1-6 ps-xl-5">
            <div className="mb-5 wow fadeIn">
              {/* Render additional details about the celebrity here */}
              <div className="text-start mb-1-6 wow fadeIn">
                <h2 className="h1 mb-0 text-primary">
                  About {celebrityDetails.name}
                </h2>
              </div>
              <p>{/* Add celebrity details here */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
