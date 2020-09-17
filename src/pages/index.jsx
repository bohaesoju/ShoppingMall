import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage = () => {
  <>
    <Head>
      <title>은미문방구</title>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <TitleH1>index</TitleH1>
  </>;
};

export default IndexPage;
