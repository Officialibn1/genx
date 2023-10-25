import Link from 'next/link';
import React from 'react'
import { FaGithubAlt, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram, IoStorefrontSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <footer>
        <div className="logoSocials">
            <div className="logo">
                <Link href={'/'}>
                    <IoStorefrontSharp />
                    <span>GenX</span>
                </Link>
            </div>

            <div className="socials">
                <IoLogoInstagram />
                <FaWhatsapp />
                <FaXTwitter />
                <FaGithubAlt />
            </div>
        </div>

        <div className="links">
            <ul>
                <li><h1>About GenX</h1></li>
                <li><Link href={'/about'}>About Us</Link></li>
                <li><Link href={'/'}>Delivery & Returns</Link></li>
                <li><Link href={'/'}>Track Order</Link></li>
            </ul>
            <ul>
                <li><h1>More From GenX</h1></li>
                <li><Link href={'/about'}>Help</Link></li>
                <li><Link href={'/'}>Vouchers</Link></li>
                <li><Link href={'/'}>Black Friday</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer