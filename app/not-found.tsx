import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <section className="notFound">
        <h1>Ooppss...  Sorry this page does not yet exist. . . <br /><br /> <Link href={'/'}>Go back Home</Link></h1>
    </section>
  )
}

export default NotFoundPage