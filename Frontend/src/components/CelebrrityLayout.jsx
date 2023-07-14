import React from 'react'
import CategoriesPage from '../utils/CategoriesPage'
import FiltrationButton from './FiltrationButton'

const CelebrrityLayout = () => {
    return (
        <div>
            <div className="container-fluid text-center">
                <div className="row no-gutters layout ">

                    <div className="col-2">
                        {/* <div className="filterside">
                            <p className='side-head'>Product</p>
                            
                            <div className="form-check">
  <input className="form-check-input input-side-chek " type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label type sidebar-label" for="flexCheckDefault">
    Personalised Msg
  </label>
</div>
<div className="form-check">
  <input className="form-check-input input-side-chek" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label type sidebar-label" for="flexCheckChecked">
    Meet & Greet
  </label>
</div>
<div className="form-check">
  <input className="form-check-input input-side-chek" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label type sidebar-label" for="flexCheckChecked">
    Video Call
  </label>
</div>   
<div className="form-check">
  <input className="form-check-input input-side-chek" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label type sidebar-label" for="flexCheckChecked">
    Instagram DM Wish
  </label>
</div>                   <p className='side-head'>Short By</p>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label type sidebar-label" for="exampleRadios1">
                                    Popular
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label type sidebar-label" for="exampleRadios2">
                                    Lowest Price
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label type sidebar-label"  for="exampleRadios2">
                                    Highest Price
                                </label>
                            </div>
                            <p className='side-head'>Price</p>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label type sidebar-label" for="exampleRadios1">
                                  Below-1000rs
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label type sidebar-label" for="exampleRadios2">
                                    1000-3000rs
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input input-side-chek" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label type sidebar-label"  for="exampleRadios2">
                                   3000-Above
                                </label>
                            </div>
                            
                        </div> */}

                        
              <div class="s-layout">
{/* <!-- Sidebar --> */}
<div class="s-layout__sidebar">
  <a class="s-sidebar__trigger" href="#0">
     <i class="fa fa-bars"></i>
  </a>

  <nav class="s-sidebar__nav">
     <ul>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-home"></i><em>Home</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
             <i class="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
        <li>
           <a class="s-sidebar__nav-link" href="#0">
              <i class="fa fa-camera"></i><em>Camera</em>
           </a>
        </li>
     </ul>
  </nav>
</div>

{/* <!-- Content --> */}
<main class="s-layout__content">
  <h1>Full View, Please!</h1>
</main>
</div>
                        

                    </div>
                    <div className="col-10">
                        <FiltrationButton />
                        <CategoriesPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrrityLayout
