import React from 'react'
import CategoriesPage from '../utils/CategoriesPage'
import FiltrationButton from './FiltrationButton'
import ImageSlider from './ImageSlider'

const CelebrrityLayout = () => {
    return (
        <div>
            <div className="">
                <div className="row no-gutters ">
 
                    <div className="">
                       
                        {/* <FiltrationButton /> */}
                        <CategoriesPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelebrrityLayout
