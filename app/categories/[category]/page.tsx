import { item } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const fetchItems = async (category: string) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`, {
            next: {
                revalidate: 60
            }
        })

        const data = await res.json()

        const items: item[] = await data.products

        return items
    } catch (error) {
        console.error('failed to fetch data', error);
    }
}

const CategoryPage = async ({ params }: { params: { category: string }}) => {

    const category = params.category

    const items = await fetchItems(category)

  return (
    <section>
        <div className="pageSectionTitle capitalize">
            <h1>
                {category} Page
            </h1>
        </div>

        <div className="cardContainer mb-20">
            {items?.map(item => (
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

export default CategoryPage