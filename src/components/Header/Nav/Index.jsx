import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../style'

const Nav = ({ cart }) => {
    const productQty = cart.reduce((sum, item) => sum + item.qty, 0)
    return (
        <Wrapper>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"} >Contact</Link></li>
                <li><Link to={"/cart"} >Cart ({productQty})</Link></li>
            </ul>
        </Wrapper>
    )
}


export default Nav
