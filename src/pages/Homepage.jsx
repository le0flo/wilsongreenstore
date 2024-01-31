import { ProductList } from '../components/ProductList'
import { Title } from '../components/Title'
import './Homepage.css'

export function Homepage() {
    return (
        <div className="homepage">
            <Title />
            <ProductList />
        </div>
    )
}