import React from 'react'
import './style.css'
import { items } from '../api/Data'

function Header({setData}) {

  const filterByCategory=(category)=>{
    const filteredData = items.filter((product)=>{
      return product.category === category
    })  
    setData(filteredData)
  }

  const filterByPrice=(price)=>{
    const filteredData = items.filter((product)=>{
      return product.price >= price
    })  
    setData(filteredData)
  }


  return (
    <header>
        <div>Filter by {"->"}</div>
        <div onClick={()=>setData(items)}>No Filter</div>
        <div 
         onClick={()=>filterByCategory("mobiles")}
        >Mobiles</div>
        <div
         onClick={()=>filterByCategory("laptops")}
        >Laptops</div>
        <div
         onClick={()=>filterByCategory("tablets")}
        >Tablets</div>
        <div
         onClick={()=>filterByPrice(29999)}
        >{">="}29999</div>
        <div
          onClick={()=>filterByPrice(49999)}
        >{">="}49999</div>
        <div
          onClick={()=>filterByPrice(69999)}
        >{">="}69999</div>
        <div
          onClick={()=>filterByPrice(89999)}
        >{">="}89999</div>
    </header>
  )
}

export default Header