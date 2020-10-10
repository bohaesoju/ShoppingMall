import React from 'react';
import Head from 'next/head';
import PageContainer from 'src/components/common/PageContainer';
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
      </PageContainer>
    </>
  );
};

export default IndexPage;
