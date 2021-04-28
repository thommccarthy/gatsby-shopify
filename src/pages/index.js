import React from 'react';
import {
  Layout,
  SEO,
  HomepageCollectionsGrid,
  FeaturedProducts,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <SEO
        description="Planty McPlantpants Store Home"
        title="Planty McPlantpants Store"
      />
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Plants'
        )}
      />
      {!!collections.find(
        collection => collection.title === 'Featured Plants'
      ) && <FeaturedProducts />}
    </Layout>
  );
};

export default IndexPage;
