import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { clearAllItems, removeItem } from "../redux/slice";

export default function CartList() {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState(cartSelector)


    useEffect(() => {
        setCartItems(cartSelector)
    }, [cartSelector])


    const manageQuantity = (id, q) => {
        // console.log(id, q)
        let quantity = parseInt(q) > 1 ? parseInt(q) : 1

        const cartTempItems = cartSelector.map((item) => {
            return item.id == id ? { ...item, quantity } : item
        })

        console.log(cartTempItems[0]);
        setCartItems(cartTempItems);
    }

    const handlePlaceOrder =()=>{
        localStorage.clear();
        dispatch(clearAllItems())
        alert("Order Placed")
        navigate("/");
    }


    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart Items</h2>
                <span>{cartItems.length} items</span>
            </div>

            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className="cartItem">
                        <div className="item-info">
                            <img src={item.thumbnail} />

                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>

                            <div className="item-actions">
                                <div className="quantity-wrapper">
                                    <input
                                        type="number"
                                        className="quantity-input"
                                        placeholder="Enter Quantity"
                                        min="1"
                                        value={item.quantity ? item.quantity : 1}
                                        onChange={(e) => manageQuantity(item.id, e.target.value)}
                                    />
                                    <div className="price-remove-wrapper">
                                        <span className="price">
                                            ${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}
                                        </span>
                                        <button onClick={() => dispatch(removeItem(item))} className="btn remove-btn">Remove</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )) : null
            }
            <div className="checkout-bar">


                <button onClick={()=> handlePlaceOrder()} className="place-order">Place Order</button>


                <div className="order-total">
                    Total: ${cartItems.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price, 0).toFixed(2)}
                </div>

            </div>

        </div>

    )
}