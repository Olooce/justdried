import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Categories.css';

import nutsImg from '../../public/assets/nuts.jpg';
import driedFruitsImg from '../../public/assets/dried-fruits.jpg';
import herbsImg from '../../public/assets/herbs.jpg';
import specialtyImg from '../../public/assets/specialty.jpg';

const categories = [
  { name: 'Nuts & Legumes', image: nutsImg },
  { name: 'Dried Fruits', image: driedFruitsImg },
  { name: 'Herbs & Spices', image: herbsImg },
  { name: 'Specialty Dried Foods', image: specialtyImg },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div 
            className="category-card" 
            key={index} 
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
