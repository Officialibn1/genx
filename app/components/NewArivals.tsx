import React from 'react'
import './styles/NewArivals.css'
import { item } from '@/typings'
import Link from 'next/link'
import Image from 'next/image'

const fetchNew = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/laptops`, {
            next: {
                revalidate: 60 * 60 * 24
            }
        })
        
        const items = await res.json()

        return items
    } catch (error) {
        console.error('failed to fetch data', error);  
    }
}

const NewArivals = async () => {

    const data = await fetchNew()

    const items: item[] = data.products

  return (
    <section className='newArivals'>
        <div className="sectionTitle">
            <h1>New Arivals</h1>
        </div>

        <div className="cardContainer">
            {items?.slice(0, 3).map(item => (
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

export default NewArivals