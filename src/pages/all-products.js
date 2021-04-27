import React from 'react';
import { Layout } from 'components';
import ProductContext from 'context/ProductContext';

export default function AllProducts() {
  const { products, collections } = React.useContext(ProductContext);

  console.log(products);

  return (
    <Layout>
      <h3>{products.length} products</h3>
      {collections.map(collection => (
        <div key={collection.shopifyId}>{collection.title}</div>
      ))}
    </Layout>
  );
}
