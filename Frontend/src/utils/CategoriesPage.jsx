import React, { useEffect, useState } from 'react'
import{CelebritiesData} from '../components/CardsData'
const CategoriesPage = () => {
  const [data,setData]=useState([]);
  const [collection,setCollection]=useState([]);

  useEffect(()=>{
    setData(CelebritiesData);
  },[])
  console.log(data)
  return (
    <div>
      
         
      <div className='container'>
                 <div className='row '>
                  
{/* card start */}
{
  data.map((item)=>{
    return(
<div className="col-sm-6 col-md-6 col-xxl-3 col-xl-3 col-lg-4 p-3">
<div class="card " >
  <img src={item.image} class="card-img-top" alt="img"/>
  <div class="card-body">
    <p class="card-title">card title</p>
    <div className='d-flex justify-content-around mb-5'>
      <h3>300 Rs</h3>
    <a href="" class="btn btn-primary">{item.price}</a>
    </div>
  </div>
</div>
</div>)


  })
}


{/* card start */}
</div>

</div>
         

    </div>
  )
}

export default CategoriesPage
