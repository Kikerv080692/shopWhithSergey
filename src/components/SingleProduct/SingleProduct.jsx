import {Link, useLocation} from "react-router-dom";
import './Singleproduct.scss'

const SingleProduct = () => {
    const {state: {data}} = useLocation()

    return (
        <section>
            <Link to='/'>
                Back
            </Link>


            <div  className="product">
                <img className="product__image" src={data.image} alt={data.title}/>
                <h2 className="product__title">
                    {data.title.length > 30 ? data.title.slice(0, 30) + '...' : data.title}
                </h2>
                <p className="product__category">{data.category}</p>
                <p className="product__description">
                    {data.description.length > 50 ? data.description.slice(0, 50) + '...' : data.description}
                </p>
                <p className={`product__price ${data.price > 100 ? "product__price-expensive" : "product__price-cheep"}`}>
                    {data.price}
                </p>
                <p className="product__rating">{data.rating.rate}</p>
            </div>
        </section>
    )
}

export default SingleProduct