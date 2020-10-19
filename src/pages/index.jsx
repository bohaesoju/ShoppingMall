import React from 'react';
import Head from 'next/head';
import PageContainer from 'src/components/common/PageContainer';
import Study1 from 'src/components/Study1/Study1';
import Study2 from 'src/components/Study2/Study2';
import ProductList from 'src/containers/ProductList';
import { DocumentManager } from 'src/utils/DocumentManager';

const IndexPage = () => {
  return (
    <>
      <Head>
        {DocumentManager.MOBILE_DEFAULT_HEADER}
      </Head>
      <PageContainer>
        <ProductList />
        <Study1 />
        <Study2 />
      </PageContainer>
    </>
  );
};

export default IndexPage;
