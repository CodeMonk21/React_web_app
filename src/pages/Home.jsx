import React from 'react'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'
import CardDataJson from "../CardData.json"

function Home() {

  console.log(CardDataJson);
  return (
    <>
      <div style={{backgroundColor:"whitesmoke"}}>
        <div className='mb-5' >
          <Carousel />
        </div>
        <h1 className='text-center fw-bold mb-5 text-decoration-underline '>Products</h1>
        <div className='d-flex  m-auto gap-5 px-4  flex-wrap' >
          {
            CardDataJson.map((data,index)=>{
              return(
                <ProductCard key={index} data={data} />
              )

            })
          }
        </div>

      </div>
    </>
  )
}

export default Home