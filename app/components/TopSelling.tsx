import React from 'react'
import './styles/TopSelling.css'
import Link from 'next/link'
import Image from 'next/image'
import { item } from '@/typings'

const fetchItems = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/fragrances`, {
            next: {
                revalidate: 0
            }
        })

        const data = await res.json()

        const items: item[] = await data.products

        // console.log(items);
        
        return items
    } catch (error) {
        console.error('failed to fetch data', error);
        
    }
}

const TopSelling = async () => {

    const items = await fetchItems()

  return (
    <section className='topSelling'>
        <div className="sectionTitle">
            <h1>Top Selling</h1>
        </div>

        <div className="cardContainer">
            {items?.slice(0, 4).map(item => (
                <Link key={item.id} href={`/categories/${item.category}/${item.id}`} className='productCard' >
                    <div>
                        <div className="productCardImage">
                            <Image src={item.images[1]} width={300} height={300}  alt={item.title} />
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
    </section>
  )
}

export default TopSelling