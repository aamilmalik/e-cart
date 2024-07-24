import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {

  return (
    <>
        {
          cart.length > 0 ? (
           <div className='container'>
            <Product key={cart.id} items={cart} />
            <button className='btn btn-danger w-25 my-4'
             style={{
              marginLeft:"35%"
            }}
            onClick={()=>setCart([])}
            >Clear Cart</button>
           </div>
          ) : (
            <h2 style={{
              color:"red",
              textAlign:"center",
              marginTop:"5vw"
            }}>Cart is Empty
          <Link to="/"><button className='btn btn-success mx-3'>Continue Shopping...</button></Link>
            </h2>
          )
        }
    </>
)}

export default Cart