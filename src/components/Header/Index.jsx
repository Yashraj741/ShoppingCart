import React from 'react'
import Nav from './Nav/Index'
import { Link } from 'react-router-dom'
import Wrapper from './style'
const Header = ({cart}) => {
    return (
        <Wrapper>
            <h1><Link to={"/"} >Shopping App</Link></h1>
            <Nav cart={cart} />
        </Wrapper>
    )
}

export default Header