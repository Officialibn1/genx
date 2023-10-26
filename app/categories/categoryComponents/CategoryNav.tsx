import React from 'react'
import './Styles/CategoryNav.css'
import Link from 'next/link'
import { IoLaptopOutline, IoShirtSharp } from 'react-icons/io5'
import { TbPerfume } from "react-icons/tb";
import { GiShirt } from "react-icons/gi";
import { BsSunglasses } from "react-icons/bs";

type category = {
  title: string
  icon: React.ReactNode
}

const categories: category[] = [
  {
    title: 'laptops',
    icon: <IoLaptopOutline />
  },
  {
    title: 'fragrances',
    icon: <TbPerfume />
  },
  {
    title: 'mens-shirts',
    icon: <GiShirt />
  },
  {
    title: 'sunglasses',
    icon: <BsSunglasses />
  },
  {
    title: 'tops',
    icon: <IoShirtSharp />
  }
]

// 'laptops', 'fragrances', 'mens-shirts', 'sunglasses', 'tops'


const CategoryNav = () => {

  return (
    <div className='categoryNav'>
        {categories.map((item, i) => (
          <Link href={`/categories/${item.title}`} key={i} className="navItem">
            <div>
              {item.icon}

              <p>
                {item.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default CategoryNav