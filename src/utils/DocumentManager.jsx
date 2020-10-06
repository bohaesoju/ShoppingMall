import * as React from 'react';

export class DocumentManager {
  static COMMON_DEFAULT_HEAD = [
    <title key={'title'}>미미 문방구</title>,
    <meta key={'charSet'} charSet={'utf-8'}/>,
    <meta key={'description'} name='description' content='볼펜, 공책, 지우개, 문방구 용품'/>,
    <meta key={'keywords'} name='keywords' content='볼펜, 공책, 지우개, 필통'/>,
  ];

  static COMMON_OG_HEAD = [
    <meta key={'og:site_name'} property='og:site_name' content='미미 문방구'/>,
    <meta key={'og:title'} property='og:title' content='미미문방구: 노트, 볼펜, 필통 문방구 전문'/>,
    <meta key={'og:type'} property='og:type' content='website'/>,
    <meta key={'og:description'} property='og:description' content='노트, 볼펜, 필통 문방구 톡톡튀고 높은 품질의 제품을 만나보세요.'/>,
    <meta key={'pg:url'} property='og:url' content='https://mimi-shop.com'/>,
    <meta key={'og:image'} property='og:image' content='https://mimi-shop.com/og-image-logo.jpg'/>,
  ];

  static MOBILE_DEFAULT_HEADER = [
    ...DocumentManager.COMMON_DEFAULT_HEAD,
    ...DocumentManager.COMMON_OG_HEAD,
    <meta key={'viewport'} name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'/>,
  ];
}
