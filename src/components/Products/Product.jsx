import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {ContextTheme} from "../../context/Theme.jsx";

const Product = ({product}) => {
    const navigate = useNavigate()
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('products' )) || [])
    const {theme} = useContext(ContextTheme)
    const viewProduct = (product) => {
        navigate(`product/${product.id}`, {state: {data: product}})
    }
    const addToBasket = (product) => {
        const findProduct = cartProducts.find(item => item.id === product.id)

        if(findProduct){
            // якщо товар є в корзині збільшуємо його кількість на 1
            const updatedCartProducts = cartProducts.map(item => {
                if(item.id === product.id){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
            setCartProducts(updatedCartProducts)
            localStorage.setItem('products', JSON.stringify(updatedCartProducts));
        }else {
            const updateCartProduct = [...cartProducts, {...product, quantity: 1}]
            setCartProducts(updateCartProduct)
            localStorage.setItem('products', JSON.stringify(updateCartProduct));
        }



        navigate('/cart');
    };

    return (
        <div key={product.id} className={`product ${theme === 'light' ? 'light' : 'dark'}`}>
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
            <button className="product__btn-view" onClick={() => viewProduct(product)} >View</button>
            <button className="product__btn-basket" onClick={() => addToBasket(product) } >Add to basket</button>
        </div>
    )
}

export default Product