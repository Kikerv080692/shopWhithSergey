
import {useEffect, useState} from "react";
import {getAllProducts} from "../../api/products.js";
import './Products.scss'
import Product from "./Product.jsx";
import Loading from "../../ui/Loading.jsx";
import BackToTopButton from "../BackToTopButton/BackToTopButton.jsx";
import Search from "../Search/Search.jsx";



const Products = () => {
    const [products, setProducts] = useState([])
    const [visibleProducts, setVisibleProducts] = useState(10)
    const [search, setSearch] = useState('')
    const [filterProducts, setFilterProducts] = useState([])



    useEffect(() => {
        getAllProducts().then(data => setProducts(data))
    }, []);

    if(!products || products.length === 0){
        return <Loading/>
    }
    const loadMoreProducts = () => {
        setVisibleProducts(prev => prev + 4)
    }

        console.log(search)
    const handleChange = (event) => {
        setSearch(event.target.value)
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilterProducts(filteredProducts);
    }

    console.log(1,filterProducts)

    return (
        <>
            <header className='products__header'>
                <h2>Products</h2>
                <Search search={search} handleChange={handleChange}/>
                <h2>Amount: {search === '' ? visibleProducts : filterProducts.length}</h2>
            </header>
            <div className="products">
                {
                    (search === '' ? products : filterProducts).slice(0,visibleProducts).map(product => <Product key={product.id} product={product}/>)
                }
            </div>
            <div className="btn__load-wrapper">
                {
                    visibleProducts === products.length ? null :
                        <button className="btn__load" onClick={loadMoreProducts}>Load more</button>
                }

            </div>

            <BackToTopButton/>
        </>
    )
}

export default Products

// Визначення функціонального компонента Products
// const Products = () => {
//     // Станові змінні для управління продуктами, видимими продуктами, введенням пошуку та відфільтрованими продуктами
//     const [products, setProducts] = useState([]); // Стан для зберігання всіх продуктів
//     const [visibleProducts, setVisibleProducts] = useState(10); // Стан для управління кількістю видимих продуктів
//     const [search, setSearch] = useState(''); // Стан для управління введенням пошуку
//     const [filterProducts, setFilterProducts] = useState([]); // Стан для зберігання відфільтрованих продуктів на основі пошуку
//
//     // useEffect хук для отримання продуктів при монтуванні компонента
//     useEffect(() => {
//         getAllProducts().then(data => setProducts(data)); // Отримання всіх продуктів з API та оновлення стану
//     }, []);
//
//     // Рендерінг компоненту завантаження, якщо продукти ще не завантажені
//     if (!products || products.length === 0) {
//         return <Loading/>;
//     }
//
//     // Функція для завантаження додаткових продуктів
//     const loadMoreProducts = () => {
//         setVisibleProducts(prev => prev + 4); // Збільшення кількості видимих продуктів на 4
//     };
//
//     // Обробник подій для відстеження змін в полі пошуку
//     const handleChange = (event) => {
//         setSearch(event.target.value); // Оновлення стану пошуку зі значенням введення
//         // Фільтрація продуктів за введеним значенням пошуку та оновлення стану відфільтрованих продуктів
//         const filteredProducts = products.filter(product => product.title.toLowerCase().includes(event.target.value.toLowerCase()));
//         setFilterProducts(filteredProducts);
//     };
//
//     // Рендерінг JSX компоненту Products
//     return (
//         <>
//             <header className='products__header'>
//                 <h2>Products</h2>
//                 <Search search={search} handleChange={handleChange}/> {/* Рендерінг компоненту Search */}
//                 {/* Відображення кількості відфільтрованих продуктів або видимих продуктів */}
//                 <h2>Кількість: {filterProducts ? filterProducts.length : visibleProducts}</h2>
//             </header>
//             <div className="products">
//                 {
//                     // Проходження через відфільтровані продукти або видимі продукти та рендерінг компоненту Product для кожного
//                     filterProducts.slice(0, visibleProducts).map(product => <Product key={product.id} product={product}/>)
//                 }
//             </div>
//             {/* Рендерінг кнопки "Завантажити ще", якщо є ще продукти для завантаження */}
//             <div className="btn__load-wrapper">
//                 {
//                     visibleProducts === products.length ? null :
//                         <button className="btn__load" onClick={loadMoreProducts}>Завантажити ще</button>
//                 }
//             </div>
//             {/* Рендерінг компоненту BackToTopButton */}
//             <BackToTopButton/>
//         </>
//     );
// };
//
// // Експорт компоненту Products як дефолтного
// export default Products;