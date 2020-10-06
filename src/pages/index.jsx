import React from 'react';
import Head from 'next/head';
// import styled from 'styled-components';
import Header from 'src/components/common/Header';
import { DocumentManager } from 'src/utils/DocumentManager';

// const TitleH1 = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

const IndexPage = () => {
  return (
    <>
      <Head>
        {DocumentManager.MOBILE_DEFAULT_HEADER}
      </Head>
      <Header />
    </>
  );
};

export default IndexPage;
