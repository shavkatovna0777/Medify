import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import Img from '../LazyLoadImg/Img';

const RelatedProducts = ({ currentProductId, products }) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: true });
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };
  const getRelatedProducts = () => {
    const currentProduct = products.find(p => p.id === currentProductId);
    if (!currentProduct) return [];

    return products
      .filter(product => {
        if (product.id === currentProductId) return false;
        
        const sharedCategories = product.categories.some(cat => 
          currentProduct.categories.includes(cat)
        );
        const sharedTags = product.tags.some(tag => 
          currentProduct.tags.includes(tag)
        );
        
        return sharedCategories || sharedTags;
      })
      .slice(0, 4);
  };

  const getRandomRating = () => {
    return Math.floor(Math.random() * 2) + 3;
  };

  const renderStarRating = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={13}
            className={`${
              index < rating 
                ? 'text-orange fill-orange' 
                : 'text-[#CFC8D8] fill-[#CFC8D8]'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-16">
      <h2 className="text-4xl font-bold text-center text-darkBlue mb-12">
        Related Products
      </h2>
      
      <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-2 gap-8" data-aos="fade-left" data-aos-once="true">
        {getRelatedProducts().map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative aspect-square mb-4 overflow-hidden group">
              <Img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-[20px] whitespace-nowrap font-semibold text-darkBlue mb-2">
              {product.title}
            </h3>
            
            <div className="mb-2">
              {renderStarRating(getRandomRating())}
            </div>
            
            <div className="text-xl font-bold text-darkBlue">
              ${parseFloat(product.price).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;