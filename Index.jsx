import React, { useState } from 'react'

const Index = () => {
    const handleForm = (e) => {
        e.preventDefault();
        console.log("SubmitBtn")
    }
    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Yashraj",
            age: 20
        },
        {
            id: "2",
            name: "Yash",
            age: 21
        }
    ])
    const [product, setProduct] = useState();

    const update = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    const add = () => {
        setProducts([...products, {
            ...product,
            id: Date.now().toString()
        }])
        // alert("Data Inserted Succesfully, So rest and enjoy the Data! ");
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <input onChange={update} name='name' type="text" placeholder='name' />
                <input onChange={update} name="age" type="number" placeholder='age' />
                <button onClick={add} >Add</button>
            </form>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        {product.name} - {product.age}
                    </div>
                ))}
            </div>
        </>
    )
}
export default Index