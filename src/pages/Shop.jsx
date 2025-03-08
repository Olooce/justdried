import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { supabase } from '../supabase'; // ✅ Import Supabase

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get('category');

  const { addToCart } = useContext(CartContext); // ✅ Use addToCart

  // ✅ State to hold products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch products from Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      let { data, error } = await supabase.from('products').select('*');

      if (error) {
        console.error('❌ Error fetching products:', error);
      } else {
        console.log('✅ Fetched products:', data);
        setProducts(data);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // ✅ Filter by category (if selected)
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // ✅ Function to construct Supabase storage image URL
  const getImageUrl = (imagePath) => {
    // Remove any leading slash to avoid double slashes in the URL
    const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
    const { data, error } = supabase
      .storage
      .from('product-images')
      .getPublicUrl(cleanPath);
    
    if (error) {
      console.error('Error fetching public URL:', error);
      return null;
    }
    
    return data.publicUrl;
  };
  

  return (
    <div className="shop-page">
      <h2 className="shop-title">{selectedCategory ? selectedCategory : 'All Products'}</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={getImageUrl(product.image)} 
                alt={product.name} 
                className="product-image"
                onError={(e) => (e.target.src = getImageUrl("default.jpg"))} // ✅ Fallback image
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Ksh {product.price}</p>
              <p className="product-description">{product.description}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
