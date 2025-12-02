import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const AddToCart = () => {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector.length);

    return (

        <div className="cart">
            <Link to="/cart">
                <svg className="cart-icon" viewBox="0 0 24 24">
                    <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97a2 2 0 1 0 2 0h6a2 2 0 1 0 2 0h-8.42c-.14 0-.27-.07-.33-.2l-.03-.06L17 9H7L6.25 7.5 4 2H1V0h3l1 2h14v2H7z" />
                </svg>
                <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>

            </Link>

        </div>

    )
}

export default AddToCart;
