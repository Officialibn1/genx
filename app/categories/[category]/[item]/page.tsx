import { item } from '@/typings'
import React from 'react'
import '../../categoryComponents/Styles/SingleProduct.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

// export const generateStaticParams = async () => {
//     const res = await fetch(`https://dummyjson.com/products`).then(res => res.json())

//     const items: item[] = await res.products

//     return items.map(item => ({
//         category: item.category,
//         item: item.id.toString()
//     }))
// }

const fetchItem = async (category: string, item: string) => {
    const url = `https://dummyjson.com/products/${item}`
    
    try {
        const res = await fetch(url, {
            next: {
                revalidate: 60
            }
        })

        const data: item = await res.json()

        return data
    } catch (error) {
        console.error(`failed to fetch item from URL ${url}`, error);
    }
}

const ItemsPage = async ({ params }: { params: { category: string, item: string }}) => {
    const categoryId = params.category

    const itemId = params.item

    

    const item = await fetchItem(categoryId, itemId)

    if (!item) {
        notFound()
    }
    
  return (
    <section className='singleProductPage'>
        <div className='productContent'>
            <div className="productImage">
                <Image src={item.images[0]} alt={item.title} width={300} height={300} quality={100} />
            </div>

            <div className="productDescription">
                <h1>
                    <span>Name:</span> {item.title}
                </h1>

                <h2>
                    <span>Category:</span> {item.category}
                </h2>

                <p>
                    <span>Rating:</span> {item.rating}
                </p>

                <p>
                    <span>Description:</span> <br />{item.description}
                </p>

                <div className="quantity">
                    <button>
                        <BsPlus />
                    </button>

                    <p>( {5} )</p>

                    <button>
                        <BiMinus />
                    </button>
                </div>

                <div className="addToCart">
                    <button>
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ItemsPage