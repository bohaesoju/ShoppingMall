import { productItems } from '../dummy/productItems';

/**
 * @description product API
 */
export const productApi = {
  /**
   * @description 제품 목록 가져오기
   */
  getItems: () => {
    // NOTE: 백엔드 서버 구현
    const newProductItems = Object.assign(productItems);
    const totalProducts = newProductItems.length;
    const serverData = {
      items: newProductItems
        .sort((a, b) => b.score - a.score),
      totalProducts,
    };
    return serverData;
  },
};
