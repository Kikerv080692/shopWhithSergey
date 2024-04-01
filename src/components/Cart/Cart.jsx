import { SlClose } from "react-icons/sl";
import './Cart.scss'
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Paymant from "./Paymant.jsx";

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([])
    const navigate = useNavigate()

    const removeAllProducts = () => {
        localStorage.removeItem('products')
        setCartProducts([])
    }
    const removeFromCart = (id) => {
        const updateCartProducts = cartProducts.filter(product => product.id !== id)
        setCartProducts(updateCartProducts)
        localStorage.setItem('products', JSON.stringify(updateCartProducts))
    }

    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem('products')))
    }, []);

    const totalQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);

    const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);


    return (
        <section className="cart">
            {
                cartProducts?.length > 0 ? (
                    <>
                        <header className="cart__header">
                            <div>
                                <button className="btn__back" onClick={() => navigate(-1)}>
                                    Back
                                </button>
                                <button onClick={removeAllProducts}>Delete All</button>
                            </div>
                            <div className="total">
                                <strong>Total: <span>{totalQuantity}</span></strong>
                                <strong>Total Price: <span>${totalPrice.toFixed(2)} </span> </strong>
                            </div>
                        </header>
                        <div className="cart__wrapper">
                            <div className="cart__products">
                                {cartProducts.map(product => (
                                    <div className="product" key={product.id}>
                                        <SlClose size={40} color={'red'} onClick={() => removeFromCart(product.id)}/>
                                        <img className="product__image" src={product.image} alt={product.title}/>
                                        <h2 className="product__title">
                                            {product.title.length > 30 ? product.title.slice(0, 30) + '...' : product.title}
                                        </h2>
                                        <p className="product__category">{product.category}</p>
                                        <p className="product__description">
                                            {product.description.length > 50 ? product.description.slice(0, 50) + '...' : product.description}
                                        </p>
                                        <p className={`product__price ${product.price > 100 ? "product__price-expensive" : "product__price-cheep"}`}>
                                            {product.price}
                                        </p>
                                        <p className="product__rating">{product.rating.rate}</p>
                                        <p className="product__quantity">{product.quantity}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="payment__wrapper">
                                <Paymant/>
                            </div>

                        </div>

                    </>
                ) : <h2>Cart Empty!</h2>
            }

        </section>
    )
}

export default Cart