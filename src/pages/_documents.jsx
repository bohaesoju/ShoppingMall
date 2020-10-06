import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalWebStyle } from '../styles/global';
// eslint-disable-next-line import/order
import { DocumentManager } from 'src/utils/DocumentManager';

export default class ShopDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (StationeryApp) => (props) => sheet.collectStyles(
          <>
            <GlobalWebStyle />
            <StationeryApp {...props} />
          </>,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      initialProps.head = DocumentManager.MOBILE_DEFAULT_HEADER;
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
