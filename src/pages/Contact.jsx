import ProductCard from '../components/ProductCard';

const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 19.99,
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/t-shirt-1836049_960_720.jpg",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 49.99,
      image: "https://cdn.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    },
    {
      id: 3,
      name: "Sneakers",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1519741491095-3df5e121c6b3",
    },
  ];
  
export const Contact = () => {
    return (
        <div className="shop">
          <h2>Shop Our Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>   
      );
};

export default Contact;