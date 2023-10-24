import Link from 'next/link'
import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header>
        <h1>Design and High Quality Products</h1>

        <p>
            Sale of high-quality branded tech products with unique designs and specifications.
        </p>

        <div className="headerLinks">
            <Link href={'/categories'}>
                Categories
            </Link>

            <Link href={'/discount-sales'}>
                Discount Sales
            </Link>
        </div>
    </header>
  )
}

export default Header