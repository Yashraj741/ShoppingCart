import React, { useState } from 'react'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className='bg-gray-50 px-6 py-16'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10 text-center'>
          <p className='text-sm font-semibold uppercase tracking-widest text-blue-600'>Get in touch</p>
          <h2 className='mt-3 text-4xl font-bold text-gray-900'>How can we help?</h2>
          <p className='mx-auto mt-4 max-w-2xl leading-7 text-gray-600'>
            Have a question about an order or our products? Send us a message and our team will
            get back to you as soon as possible.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-[0.8fr_1.2fr]'>
          <aside className='rounded-2xl bg-gray-900 p-8 text-white'>
            <h3 className='text-2xl font-bold'>Contact information</h3>
            <p className='mt-3 leading-7 text-gray-300'>We are happy to answer your questions and hear your feedback.</p>
            <div className='mt-8 space-y-6 text-sm'>
              <div>
                <p className='font-semibold text-blue-300'>Email</p>
                <a className='mt-1 block text-gray-200 hover:text-white' href='mailto:hello@mystore.com'>hello@mystore.com</a>
              </div>
              <div>
                <p className='font-semibold text-blue-300'>Phone</p>
                <a className='mt-1 block text-gray-200 hover:text-white' href='tel:+919876543210'>+91 98765 43210</a>
              </div>
              <div>
                <p className='font-semibold text-blue-300'>Hours</p>
                <p className='mt-1 text-gray-200'>Monday - Saturday, 9 AM - 6 PM</p>
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className='rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100'>
            {submitted && (
              <div className='mb-6 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-700' role='status'>
                Thanks for reaching out. We will get back to you shortly.
              </div>
            )}
            <div className='grid gap-6 sm:grid-cols-2'>
              <label className='text-sm font-medium text-gray-700'>
                Name
                <input required name='name' type='text' className='mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100' placeholder='Your name' />
              </label>
              <label className='text-sm font-medium text-gray-700'>
                Email
                <input required name='email' type='email' className='mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100' placeholder='you@example.com' />
              </label>
            </div>
            <label className='mt-6 block text-sm font-medium text-gray-700'>
              Subject
              <input required name='subject' type='text' className='mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100' placeholder='How can we help?' />
            </label>
            <label className='mt-6 block text-sm font-medium text-gray-700'>
              Message
              <textarea required name='message' rows='5' className='mt-2 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100' placeholder='Tell us a little more...' />
            </label>
            <button type='submit' className='mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact