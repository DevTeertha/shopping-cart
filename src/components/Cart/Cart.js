import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cartDetails;
    const total = cart.reduce((total , prd) => total+prd.price ,0)
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <h5>Total Price: ${total} </h5>
        </div>
    );
};

export default Cart;