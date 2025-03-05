import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import peanutsImage from '../assets/peanutsjpg.jpg';
import almondsImage from '../assets/almonds.jpeg';
import driedMangoImage from '../assets/dried-mango.jpg';
import moringaImage from '../assets/moringa.jpg';
import sunDriedTomatoesImage from '../assets/sundried-tomatoes.jpg';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

  const allProducts = [
    { name: 'Peanuts', category: 'Nuts & Legumes', image: peanutsImage, price: 'Ksh 200' },
    { name: 'Almonds', category: 'Nuts & Legumes', image: almondsImage, price: 'Ksh 500' },
    { name: 'Dried Mango', category: 'Dried Fruits', image: driedMangoImage, price: 'Ksh 300' },
    { name: 'Moringa Powder', category: 'Herbs & Spices', image: moringaImage, price: 'Ksh 400' },
    { name: 'Sun-Dried Tomatoes', category: 'Specialty Dried Foods', image: sunDriedTomatoesImage, price: 'Ksh 350' },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(allProducts.filter((product) => product.category === selectedCategory));
    } else {
      setFilteredProducts(allProducts);
    }
  }, [selectedCategory]);

  return (
    <div className="shop-page">
      <h2>{selectedCategory ? selectedCategory : 'All Products'}</h2>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
