import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from "../../feature/products/cartSlice.jsx";


const CartPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    // Calculate total price and total quantity
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    const handleBuyNow = () => {
        alert('Implement your buy now functionality here!');
        // Add logic to proceed to checkout or payment gateway
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-lg-8">
                    {cartItems.length > 0 ? (
                        <div>
                            {cartItems.map(item => (
                                <div key={item.id} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">Price: ${item.price.toFixed(2)}</p>
                                        <p className="card-text">Quantity: {item.quantity}</p>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>
                <div className="col-lg-4">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Summary</h5>
                            <p className="card-text">Subtotal ({totalQuantity} items): ${totalPrice.toFixed(2)}</p>
                            {/* Add additional summary details here */}
                            <button className="btn btn-primary" onClick={handleBuyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
