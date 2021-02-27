import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    //console.log(props.product);
    const { name, img, seller, stock, price } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} />
            </div>
            <div className='product-header'>
                <h1>{name}</h1>
                <p>By {seller} | <small>Only {stock} left in stock - Order Soon </small></p>
                <p className='price'>${price}</p>
                <button onClick={() => props.handleEvent(props.product)} ><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;