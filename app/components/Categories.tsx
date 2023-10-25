import { CategoriesType } from '@/typings';
import React from 'react'
import './styles/Categories.css'
import Link from 'next/link';


const fetchCategories =  async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/categories`, {
            next: {
             revalidate: 60 * 60 * 24
            } 
         })
     
         const data = await res.json()
        //  console.log(data, 'Fetched');
         return data
    } catch (error) {
        console.error('Error fetching data', error);
        
    }
}

const Categories = async () => {

    const categories = await fetchCategories()

  return (
    <section className='categories'>
        <div className="sectionTitle">
            <h1>Categories</h1>
        </div>

        <div className="categoriesContainer">
            {categories?.slice(0, 6).map((cat: string, i: string) => (
                <Link href={`/categories/${cat}`} key={i} className="categoriesCard" >
                    <h1>
                        {cat}
                    </h1>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Categories