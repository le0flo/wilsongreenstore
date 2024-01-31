import './Product.css'

export function Product() {
    return (
        <div className="product">
            <img src="" alt="product-image" onError={e => { 
                if(this.state.imageLoadError) { 
                    this.setState({
                        imageLoadError: false
                    });
                    e.target.src = 'shopping-cart-symbolic.png';
                }
            }} />
            <h2>Prodotto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie justo nec nisl placerat suscipit.</p>
        </div>
    )
}