'use client'
import Link from 'next/link';
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const CartUser = () => {
  return (
    <div className="cartUser">
        <Link href={'/cart'}>
          <FaShoppingCart />
        </Link>

        <Link href={'/'}>
          <FaUserLarge />
        </Link>
    </div>
  )
}

export default CartUser