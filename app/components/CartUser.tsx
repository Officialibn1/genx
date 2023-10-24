'use client'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const CartUser = () => {
  return (
    <div className="cartUser">
        <FaShoppingCart />
        <FaUserLarge />
    </div>
  )
}

export default CartUser