import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from '../ProductTile';
import { StyledLink } from '../StyledLink';

export function ProductsGrid({ products }) {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          key={product.shopifyId}
          title={product.title}
          description={product.description}
        />
      ))}
    </ProductsGridWrapper>
  );
}
