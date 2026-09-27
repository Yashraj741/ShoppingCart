import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'

const Home = ({ products, cart, setCart }) => {
  const productQty = (productId) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.qty : 0
  }

  const add = (product) => {
    const alreadyExist = cart.some((item) => item.id === product.id)

    const updatedCart = alreadyExist
      ? cart.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item))
      : [...cart, { ...product, qty: 1 }]

    setCart(updatedCart)
    toast.success('Product Added!', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  const remove = (product) => {
    const updatedCart = cart
      .map((item) => (item.id === product.id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0)

    setCart(updatedCart)
    toast.error('Product Removed!', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  return (
    <HomeContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <img src={product.image} alt={product.title} />
            </ProductImage>

            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>₹{product.price}</ProductPrice>

              <QtyControls>
                <QtyButton type='button' onClick={() => remove(product)}>-</QtyButton>
                <QtyValue>{productQty(product.id)}</QtyValue>
                <QtyButton type='button' onClick={() => add(product)}>+</QtyButton>
              </QtyControls>
            </ProductDetails>
          </ProductCard>
        ))}
      </ProductGrid>

      <ToastContainer />
    </HomeContainer>
  )
}

export default Home

/* Styled components (styles moved from App.css) */
const HomeContainer = styled.div`
  padding: 2rem;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`

const ProductCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

const ProductDetails = styled.div`
  padding: 1rem;
  color: #111827;
`

const ProductTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`

const ProductPrice = styled.p`
  margin: 0 0 1rem;
  color: #2563eb;
  font-weight: 700;
`

const QtyControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

const QtyButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: #111827;
  color: #ffffff;
  font-size: 1.3rem;
  cursor: pointer;
`

const QtyValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 700;
  color: #111827;
`