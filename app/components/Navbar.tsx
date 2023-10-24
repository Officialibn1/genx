import Link from 'next/link'
import React from 'react'
import { IoStorefrontSharp } from "react-icons/io5";
import CartUser from './CartUser';

const Navbar = () => {
  return (
    <nav>

        {/* Large screen navlinks */}
        <div className="navLinks">
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/categories'}>Categories</Link></li>
                <li><Link href={'/contact-us'}>Contact US</Link></li>
            </ul>
        </div>

        <div className="navLogo">
            <Link href={'/'}>
                <IoStorefrontSharp />
                <span>GenX</span>
            </Link>
        </div>

        <CartUser />
    </nav>
  )
}

export default Navbar