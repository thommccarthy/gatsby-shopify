import React from 'react';
import { Layout, SEO, HomepageCollectionsGrid } from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  return (
    <Layout>
      <HomepageCollectionsGrid
        collections={collections.filter(
          collection => collection.title !== 'Featured Plants'
        )}
      />
    </Layout>
  );
};

export default IndexPage;
