import './Product.css'

export function Product() {
    return (
        <div className="product">
            <img src="" alt="product-image" onError={({ target }) => {
                target.onerror = null;
                target.src = 'shopping-cart-symbolic.png';
            }} />
            <h2>Prodotto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie justo nec nisl placerat suscipit.</p>
        </div>
    )
}