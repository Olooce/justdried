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
    {
      name: 'Peanuts',
      category: 'Nuts & Legumes',
      image: peanutsImage,
      price: 'Ksh 200/250g',
      description: 'Rich in protein and healthy fats, great for heart health.'
    },
    {
      name: 'Almonds',
      category: 'Nuts & Legumes',
      image: almondsImage,
      price: 'Ksh 500/100g',
      description: 'Boosts brain function and supports weight management.'
    },
    {
      name: 'Dried Mango',
      category: 'Dried Fruits',
      image: driedMangoImage,
      price: 'Ksh 300/400g',
      description: 'High in vitamin A and antioxidants for a healthy immune system.'
    },
    {
      name: 'Moringa Powder',
      category: 'Herbs & Spices',
      image: moringaImage,
      price: 'Ksh 400/100g',
      description: 'A superfood packed with vitamins, minerals, and antioxidants.'
    },
    {
      name: 'Sun-Dried Tomatoes',
      category: 'Specialty Dried Foods',
      image: sunDriedTomatoesImage,
      price: 'Ksh 350/500g',
      description: 'Rich in lycopene and supports heart health.'
    }
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
      <h2 className="shop-title">{selectedCategory ? selectedCategory : 'All Products'}</h2>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
