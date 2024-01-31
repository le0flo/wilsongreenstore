import { Product } from './Product.jsx'
import './ProductList.jsx'

export function ProductList() {
    return (
        <div className="product-list">
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}