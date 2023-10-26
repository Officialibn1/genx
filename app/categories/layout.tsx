import React from 'react'
import CategoryNav from './categoryComponents/CategoryNav'

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <CategoryNav />
        
        {children}
    </main>
  )
}

export default CategoriesLayout