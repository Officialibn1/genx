import React from 'react'
import './categoryComponents/Styles/CategoryStyles.css'
import { item } from '@/typings'
import Link from 'next/link'
import Image from 'next/image'


// Function to fetch items
const fetchCategory = async (category: string) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`, {
            next: {
                revalidate: 60 * 60
            }
        })

        const data = await res.json()

        const items: item[] = await data.products

        return items
    } catch (error) {
        console.error('failed to fetch items', error);
    }
}

const CategoriesPage = async () => {
    const laptops = await fetchCategory('laptops')

    const sunglasses = await fetchCategory('sunglasses')

    const mensShirt = await fetchCategory('mens-shirts')

  return (
    <div>
        <div className="pageSectionTitle">
            <h1>
                Product Categories
            </h1>
        </div>

        {/* Laptop List */}
        <div className="sectionTitle px-[5vw]">
            <h1>
                Laptops
            </h1>
        </div>

        <div className="cardContainer">
            {laptops?.slice(0, 3).map(item => (
                <Link key={item.id} href={`/categories/${item.category}/${item.id}`} className='productCard' >
                <div>
                    <div className="productCardImage">
                        <Image src={item.images[0]} width={400} height={400}  alt={item.title} />
                    </div>

                    <div className="productCardDesc">
                        <h1>
                            {item.title}
                        </h1>

                        <h2>
                            Brand: {item.brand}
                        </h2>

                        <h3>
                            Price: ${item.price}
                        </h3>

                    </div>
                    
                    <span className="discount">
                        -{item.discountPercentage}%
                    </span>
                </div>
            </Link>
            ))}
        </div>

        {/* View All Laptops Link */}
        <div className="viewAll">
            <Link href={`/catrgories/laptops`}>
                View All
            </Link>
        </div>

        {/* Mens Shirt List */}
        <div className="sectionTitle px-[5vw]">
            <h1>
                Mens Shirts
            </h1>
        </div>

        <div className="cardContainer">
            {mensShirt?.slice(0, 3).map(item => (
                <Link key={item.id} href={`/categories/${item.category}/${item.id}`} className='productCard' >
                <div>
                    <div className="productCardImage">
                        <Image src={item.images[0]} width={400} height={400}  alt={item.title} />
                    </div>

                    <div className="productCardDesc">
                        <h1>
                            {item.title}
                        </h1>

                        <h2>
                            Brand: {item.brand}
                        </h2>

                        <h3>
                            Price: ${item.price}
                        </h3>

                    </div>
                    
                    <span className="discount">
                        -{item.discountPercentage}%
                    </span>
                </div>
            </Link>
            ))}
        </div>

        {/* View All mens shirt Link */}
        <div className="viewAll">
            <Link href={`/catrgories/mens-shirts`}>
                View All
            </Link>
        </div>

        {/* Sun Glasses List */}
        <div className="sectionTitle px-[5vw]">
            <h1>
                Sunglasses
            </h1>
        </div>

        <div className="cardContainer">
            {sunglasses?.slice(0, 3).map(item => (
                <Link key={item.id} href={`/categories/${item.category}/${item.id}`} className='productCard' >
                <div>
                    <div className="productCardImage">
                        <Image src={item.images[0]} width={400} height={400}  alt={item.title} />
                    </div>

                    <div className="productCardDesc">
                        <h1>
                            {item.title}
                        </h1>

                        <h2>
                            Brand: {item.brand}
                        </h2>

                        <h3>
                            Price: ${item.price}
                        </h3>

                    </div>
                    
                    <span className="discount">
                        -{item.discountPercentage}%
                    </span>
                </div>
            </Link>
            ))}
        </div>

        {/* View All sunglasses Link */}
        <div className="viewAll">
            <Link href={`/catrgories/sunglasses`}>
                View All
            </Link>
        </div>
    </div>
  )
}

export default CategoriesPage