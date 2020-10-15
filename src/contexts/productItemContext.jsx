import * as React from 'react';
import { productApi } from 'src/api/productApi';

export const initialSearchResult = {
  content: [],
};

const ProductItemContext = React.createContext({
  searchResult: initialSearchResult,
});

const ProductItemContextProvider = (props) => {
  const [firstLoading, setFirstLoading] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState(initialSearchResult);

  const onSearch = async () => {
    const response = await productApi.getItems();
    // console.log('response', response);
    setSearchResult(response);
    // if (response.success) {
    //   console.log('response', response);
    //   setSearchResult(response.data);
    //   response.data.content.length === 0 && dialog.openWithMessage('검색 결과가 없습니다');
    // } else {
    //   dialog.openWithMessage(response.message);
    // }
  };

  React.useEffect(() => {
    if (firstLoading === false) {
      setFirstLoading(true);
    } else {
      const onSearchPromise = onSearch();
      console.log('onSearchPromise', onSearchPromise);
    }
  });

  return (
    <ProductItemContext.Provider
      value={{
        searchResult,
        setSearchResult,
        onSearch,
      }}
    >
      {props.children}
    </ProductItemContext.Provider>
  );
};

const ProductItemContextConsumer = ProductItemContext.Consumer;
export { ProductItemContext, ProductItemContextProvider, ProductItemContextConsumer };
