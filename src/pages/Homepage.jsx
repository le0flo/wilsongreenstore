import './Homepage.css'
import { ProductList } from '../components/ProductList'
import { Title } from '../components/Title'
import { ChiSiamo } from '../components/ChiSiamo'
import { Contattaci } from '../components/Contattaci'

export function Homepage() {
    return (
        <div className="homepage">
            <Title />
            <ProductList />
            <ChiSiamo />
            <Contattaci />
        </div>
    )
}