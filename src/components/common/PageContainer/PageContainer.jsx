import * as React from 'react';
import * as Styled from './styled';
import Header from 'src/components/common/Header';

const PageContainer = () => (
// const PageContainer = (props) => (
  <Styled.Wrapper>
    <Header />
    {/* {props.children} */}
  </Styled.Wrapper>
);

export default PageContainer;
