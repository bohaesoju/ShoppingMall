import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class StationeryDocument extends Document {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () => originalRenderPage({
        enhanceApp: (StationeryApp) => (props) => sheet.collectStyles(
          <StationeryApp {...props} />,
        ),
      });

      const initialProps = await Document.getInitialProps(context);
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
