'use client'
import { useEffect, useState } from 'react'

const CategoriesError = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) => {

    useEffect(() => {
        
        // Logs the error to error reporting service
        console.error(error);

    }, [error])

  return (
    <section className='newArivals'>
         <div className="pageSectionTitle text-red-500">
            <h1>
                Error Encountered ! ! !
            </h1>
        </div>

        <div className="errorReset w-full flex justify-center my-20">
            <button onClick={() => reset()} className='w-fit bg-green-400 p-4 text-lg md:hover:bg-green-500'>
                Refresh Page
            </button>
        </div>
    </section>
  )
}

export default CategoriesError