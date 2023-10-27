import { item } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const fetchItems = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/mens-shirts`, {
            next: {
                revalidate: 60 * 60
            }
        })

        const data = await res.json()

        const items: item[] = data.products

        return items
    } catch (error) {
        console.error('Failed to fetch data', error);        
    }
}


const Fashion = async () => {
    const items = await fetchItems()

    if (!items) {
        notFound()
    }
    return (
    <section className='topSelling'>
        <div className="sectionTitle">
            <h1>
                Fashion
            </h1>
        </div>

        <div className="cardContainer">
            {items.slice(0, 3).map(item => (
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
    </section>
  )
}

export default Fashion