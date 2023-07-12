import React from 'react'
import CategoriesPage from '../utils/CategoriesPage'
import FiltrationButton from './FiltrationButton'

const CelebrrityLayout = () => {
    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">

                    <div class="col-2">
                        <div className="filterside">
                            <p className='side-head'>Product</p>
                            <ul>
                                <li><div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Personised Video msg
                                    </label>
                                </div></li>
                                <li><div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Meet & Greet
                                    </label>
                                </div></li>
                                <li><div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Video
                                    </label>
                                </div></li>
                                <li><div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                    <label class="form-check-label" for="defaultCheck2">
                                        Instagram
                                    </label>
                                </div></li>
                                <li></li>

                            </ul>
                            <p className='side-head'>Short By</p>
                            
                        </div>
                     
                    </div>
                    <div class="col-10">
                        <FiltrationButton />
                        <CategoriesPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrrityLayout
