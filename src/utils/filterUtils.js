export const filterProductsByTag = (products, tag) => {
    if (tag === "All") return products;
    return products.filter(product => 
      product.tags.some(productTag => 
        productTag.toLowerCase() === tag.toLowerCase()
      )
    );
  };
  
  export const filterProductsBySearch = (products, searchQuery) => {
    if (!searchQuery) return products;
    return products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  export const filterProductsByCategory = (products, category) => {
    if (!category) return products;
    return products.filter(product => 
      product.categories.includes(category)
    );
  };