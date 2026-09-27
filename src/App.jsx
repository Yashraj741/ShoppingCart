import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/Index'
import Contact from './components/Contact/Index'
import Header from './components/Header/Index'
import Home from './components/Home/Index'
import Cart from './components/Cart/Index'
import './App.css'
import Footer from './components/Footer'

const App = () => {
    const [products, setProducts] = useState([
        {
            id: 'Stat-1',
            title: 'Premium Leather Journal',
            price: 28,
            image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-2',
            title: 'Minimalist Fountain Pen',
            price: 45,
            image: 'https://images.unsplash.com/photo-1585336139118-132f7f21504e?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-3',
            title: 'Weekly Planner 2024',
            price: 32,
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-4',
            title: 'Pastel Highlighter Set',
            price: 15,
            image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-5',
            title: 'Canvas Pencil Case',
            price: 18,
            image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-6',
            title: 'Professional Sketchbook',
            price: 24,
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-7',
            title: 'Rose Gold Paper Clips',
            price: 10,
            image: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-8',
            title: 'Floral Washi Tape Set',
            price: 20,
            image: 'https://images.unsplash.com/photo-1583485088034-7160b52ad572?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-9',
            title: 'Bamboo Desk Organizer',
            price: 35,
            image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=900&q=80'
        },
        {
            id: 'Stat-10',
            title: 'Mechanical Pencil Kit',
            price: 22,
            image: 'https://images.unsplash.com/photo-1519336367661-eba9c1dfa5a9?auto=format&fit=crop&w=900&q=80'
        }
    ]);

    const [cart, setCart] = useState([])
    return (
        <BrowserRouter>
            <div className='min-h-screen flex flex-col bg-red-100'> {/* this is used to make the footer at the bottom when we have space between header and footer */}
                <Header cart={cart} />
                <main className='flex-1'>
                    <Routes>
                        <Route path='/' element={<Home products={products} cart={cart} setCart={setCart} />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App