import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import CardDataJson from "../CardData.json"

function Product() {
  const [searchInput, setSearchInput] = useState("")
  const [productArr, setProductArr] = useState([])


  const handleSearch = (e)=> setSearchInput(e.target.value)
  
  useEffect(()=>{
    setProductArr(CardDataJson)
  },[])
  
  useEffect(()=>{
    let filterdArr = CardDataJson.filter((data)=> data.Title.toLowerCase().includes(searchInput) )
    setProductArr(filterdArr)
  },[searchInput])

  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }} className='py-4'>
        <div className='d-flex mb-4 justify-content-around'>
          <h1 className='fs-1 text-decoration-underline'>Products</h1>
          <input type="text" className='rounded-pill text-center px-5 fw-bold' placeholder='Search Item'style={{width:"400px",outline:"none",border:"1px solid"}} onChange={handleSearch} />
        </div>
        <div className='d-flex  m-auto gap-5 px-4  flex-wrap' >
          {
            productArr.map((data, index) => {
              return (
                <ProductCard key={index} data={data} />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Product