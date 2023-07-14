import React, {useEffect,useState } from 'react'
import{CelebritiesData} from '../components/CardsData'

const Cards = () => {
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
<div className="col-sm-6 col-md-6 col-xxl-3 col-xl-4 col-lg-4 p-3">
<div class="card " >
  <img src={item.image} class="card-img-top" alt="img"/>
  <div class="card-body">
    <h5 class="card-title">card title</h5>
    <a href="/detail" class="btn btn-primary">{item.price}</a>
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

export default Cards
