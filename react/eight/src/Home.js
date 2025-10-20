import { useState } from 'react';
import './Home.css';

function Home() {
    const [products, setProducts] = useState([
        { id: 1, name: 'Ноутбук', selected: false },
        { id: 2, name: 'Смартфон', selected: false },
        { id: 3, name: 'Наушники', selected: false },
        { id: 4, name: 'Планшет', selected: false },
        { id: 5, name: 'Мышь', selected: false }
    ]);

    const toggleProductSelection = (productId) => {
        setProducts(products.map(product => 
            product.id === productId 
                ? { ...product, selected: !product.selected }
                : product
        ));
    };

    const selectedCount = products.filter(product => product.selected).length;

    return (
        <div className="home-container">
            <h2>Магазин электроники</h2>
            
            <div className="cart-summary">
                <h3>Корзина</h3>
                <p>Выбрано товаров: <strong>{selectedCount}</strong></p>
            </div>

            <div className="products-list">
                {products.map(product => (
                    <div 
                        key={product.id}
                        className={`product-item ${product.selected ? 'selected' : ''}`}
                        onClick={() => toggleProductSelection(product.id)}
                    >
                        <input
                            type="checkbox"
                            checked={product.selected}
                            onChange={() => {}}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleProductSelection(product.id);
                            }}
                            className="product-checkbox"
                        />
                        
                        <div className="product-info">
                            <h4>{product.name}</h4>
                        </div>
                        
                        <span className="selection-indicator">
                            {product.selected ? '+' : '-'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;