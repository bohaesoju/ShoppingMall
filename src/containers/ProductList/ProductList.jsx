import * as React from 'react';
import * as Styled from './styled';
import { ProductItemContext } from 'src/contexts/ProductItemContext';

const ProductList = () => {
  const { searchResult } = React.useContext(ProductItemContext);
  console.log('searchResult', searchResult);

  return (
    <Styled.Wrapper>
      <Styled.ProductListWrap>
        <Styled.CardBox>
          <Styled.ProductImage />
          <Styled.InformationWrapper>
            <Styled.ProductInformation>볼펜</Styled.ProductInformation>
          </Styled.InformationWrapper>
          <Styled.AddButton>담기</Styled.AddButton>
        </Styled.CardBox>
      </Styled.ProductListWrap>
    </Styled.Wrapper>
  );
};

export default ProductList;
