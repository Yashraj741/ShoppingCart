import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <main className='bg-gray-50'>
      <section className='bg-gray-900 px-6 py-20 text-center text-white'>
        <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300'>Our story</p>
        <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>Shopping made simple.</h2>
        <p className='mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300'>
          MyStore brings together thoughtfully selected products, fair prices, and a smooth
          shopping experience you can enjoy from anywhere.
        </p>
      </section>

      <section className='mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center'>
        <div>
          <p className='text-sm font-semibold uppercase tracking-widest text-blue-600'>Why MyStore</p>
          <h3 className='mt-3 text-3xl font-bold text-gray-900'>A better way to find your everyday essentials.</h3>
          <p className='mt-5 leading-7 text-gray-600'>
            We believe online shopping should feel personal, dependable, and effortless. Our
            collection is chosen with quality and value in mind, so you can spend less time
            searching and more time enjoying what you buy.
          </p>
          <p className='mt-4 leading-7 text-gray-600'>
            From discovery to checkout, every part of MyStore is designed to keep things clear,
            convenient, and customer-friendly.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-3 md:grid-cols-1'>
          {[
            ['Quality first', 'Products selected with care and attention to value.'],
            ['Simple shopping', 'A clean experience that helps you find what you need.'],
            ['Here to help', 'Friendly support whenever you need a hand.'],
          ].map(([title, description]) => (
            <article key={title} className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100'>
              <h4 className='font-semibold text-gray-900'>{title}</h4>
              <p className='mt-2 text-sm leading-6 text-gray-600'>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='bg-blue-600 px-6 py-12 text-center text-white'>
        <h3 className='text-2xl font-bold'>Ready to find your next favorite product?</h3>
        <Link
          to='/'
          className='mt-5 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50'
        >
          Browse the collection
        </Link>
      </section>
    </main>
  )
}

export default About