import React from 'react'
import styled from 'styled-components'


const Cart = ({ cart, setCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

    // const remove = (product) => {
    //     const updatedCart = cart.filter((item) => item.id !== product.id)
    //     setCart(updatedCart)
    // }

    const increaseQty = (product) => {
        const updatedCart = cart.map((item) =>
            item.id == product.id ? { ...item, qty: item.qty + 1 } : item
        )
        setCart(updatedCart)
    }

    const decreaseQty = (product) => {
        const updatedCart = cart.map((item) => item.id == product.id ? { ...item, qty: item.qty - 1 } : item
        )
            .filter((item) => item.qty > 0)
        setCart(updatedCart)
    }

    const removeItem = (product) => {
        const updatedCart = cart.filter((item) => item.id != product.id)
        setCart(updatedCart)
    }

    if (cart.length === 0) {
        return (
            <div className='cart-page empty-cart'>
                <h2>Your Cart is empty</h2>
                <p>Add some products from the home page</p>
            </div>
        )
    }
    return (
        <div className='cart-container px-7'>
            <Styled>
                {cart.map((product) => {
                    const singleProductTotal = product.price * product.qty
                    return (
                        <div key={product.id} className='cart-item' style={{ display: "flex", alignItems: "center", gap: "15px", marginTop:"10px", paddingBottom: '20px', borderBottom: '1px solid #ddd' }}>
                            <ImageBox src={product.image}></ImageBox>
                            <div className='font-mono'>
                                <h1 className='text-xl font-serif'>{product.title}</h1>
                                <p className=''>Price: {product.price}</p>

                                <div style={{display: 'flex', alignItems: 'center', gap: '10px', margin: '5px 0' }}>
                                    <button onClick={() => decreaseQty(product)} className='bg-red-500 px-3 py-1 text-white font-mono rounded-lg'>Decrease</button>
                                    <span className='bg-[#777] text-white font-mono font-bold px-3 py-1 rounded-full'>Qty: {product.qty}</span>
                                    <button onClick={() => increaseQty(product)} className='bg-blue-500 text-white px-3 py-1 font-mono rounded-lg' >Increase</button>
                                </div>
                                <p className='text-xl'>Subtotal: {singleProductTotal}</p>
                            </div>
                            <button onClick={() => removeItem(product)} style={{ marginLeft: "auto", background:'red', padding:"5px 10px", borderRadius:"10px", color:"white" ,border:"none",cursor:"pointer    " }}>Remove</button>
                        </div>
                    )
                })}
                <h1 className='flex justify-start border-t-2 border-b-2 mb-2 font-extrabold text-4xl items-center font-mono'>Total: {total}</h1>
            </Styled>
        </div>
    )
}

export default Cart

const ImageBox = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
`
const Styled = styled.div`
    div {
        display: 'flex';
        alignItems: 'center';
        gap: '15px';
        marginBottom: '15px';
        borderBottom: '1px solid #ddd';
        paddingBottom: '10px';
    }
`;