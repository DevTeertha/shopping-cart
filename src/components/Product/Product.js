import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, stock, price } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-header'>
                <h1>{name}</h1>
                <p>By {seller}</p>
                <p className='price'>${price}</p>
                <button>Add To Cart</button>
                <p><small>Only {stock} left in stock - Order Soon </small></p>
            </div>
        </div>
    );
};

export default Product;