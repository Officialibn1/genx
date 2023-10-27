import React from 'react'
import '../components/styles/CartPage.css'
import { item } from '@/typings'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { BsFillTrashFill, BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const CartPage = async () => {
    const res = await fetch(`https://dummyjson.com/products/category/laptops`)

    const data = await res.json()

    const items: item[] = await data.products

    if (!items) {
        notFound()
    }

  return (
    <section className='usersCart'>
        <div className="cartItems">
            {items.map(item => (
                <div key={item.id} className="cartItem">
                    <div className="cartItemImg">
                        <Image src={item.images[1]} width={150} height={100} quality={100} alt={item.title} />
                    </div>
                    <div className="cartItemDesc">
                        <h1>
                            {item.title}
                        </h1>

                        <div className="cartItemBtns">
                            <button className="deleteItem">
                                <BsFillTrashFill />
                            </button>

                            <div className="itemQuantity">
                            <button>
                                <BsPlus />
                            </button>

                            <p>( {5} )</p>

                            <button>
                                <BiMinus />
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="cartTotal">
            <h1>
                Total Items: <p>{5}</p>
            </h1>

            <h1>
                Sub-Total: <p>${23421.12}</p>
            </h1>

            <h1>
                Shipping: <p>${131.12}</p>
            </h1>

            <h1>
                Total: <p>${12331.121}</p>
            </h1>

            <button>
                Order
            </button>
        </div>
    </section>
  )
}

export default CartPage