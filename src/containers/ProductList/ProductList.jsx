import * as React from 'react';
import * as Styled from './styled';

const ProductList = () => (
  <Styled.Wrapper>
    <ul>
      <Styled.CardBox>
        <Styled.ProductImage />
        <Styled.InformationWrapper>
          <Styled.ProductInformation>볼펜</Styled.ProductInformation>
        </Styled.InformationWrapper>
        <Styled.AddButton>담기</Styled.AddButton>
      </Styled.CardBox>
    </ul>
  </Styled.Wrapper>
);

export default ProductList;
