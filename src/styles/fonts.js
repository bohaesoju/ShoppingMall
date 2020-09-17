export const defaultFontFamilyName = 'Noto-Sans-KR';
export const hannaFontFamilyName = 'BM-HANNA-11yrs-old';

export const fontFace = `
@font-face {
  font-family: '${defaultFontFamilyName}';
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
  src: url('/assets/fonts/NotoSansKR-Regular.woff2') format('woff2'),
       url('/assets/fonts/NotoSansKR-Regular.woff') format('woff');
}
@font-face {
  font-family: '${defaultFontFamilyName}';
  font-weight: 500;
  font-style: normal;
  font-display: fallback;
  src: url('/assets/fonts/NotoSansKR-Medium.woff2') format('woff2'),
       url('/assets/fonts/NotoSansKR-Medium.woff') format('woff');
}
@font-face {
  font-family: '${defaultFontFamilyName}';
  font-weight: 700;
  font-style: normal;
  font-display: fallback;
  src: url('/assets/fonts/NotoSansKR-Bold.woff2') format('woff2'),
       url('/assets/fonts/NotoSansKR-Bold.woff') format('woff');
}
@font-face {
  font-family: '${hannaFontFamilyName}';
  font-weight: normal;
  font-style: normal;
  font-display: fallback;
  src: url('/assets/fonts/BMHANNA11yrsold.woff2') format('woff2'),
       url('/assets/fonts/BMHANNA11yrsold.woff') format('woff');
}
`;

export const getFontType = (type) => {
  switch (type) {
    case type.MAIN_HEADLINE:
      return `
        font-weight: 500;
        font-size: 24px;
      `;
    case type.SECTION_TITLE_BOLD:
      return `
        font-weight: 700;
        font-size: 18px;
      `;
    case type.SECTION_TITLE:
      return `
        font-weight: 500;
        font-size: 18px;
      `;
    case type.BUTTON:
      return `
        font-weight: 700;
        font-size: 16px;
      `;
    case type.MAIN_LNB:
      return `
        font-weight: 500;
        font-size: 15px;
      `;
    case type.MAIN_LNB_CATEGORY:
      return `
        font-weight: 500;
        font-size: 13px;
      `;
    case type.SELECTION:
      return `
        font-weight: 500;
        font-size: 14px;
      `;
    case type.MOBILE_MAIN_HEADLINE:
      return `
        font-weight: 500;
        font-size: 22px;
      `;
    case type.MOBILE_MAIN_SECTION_BOLD:
      return `
        font-weight: 700;
        font-size: 20px;
      `;
    case type.MOBILE_MAIN_SECTION:
      return `
        font-weight: 500;
        font-size: 20px;
      `;
    case type.MOBILE_SUB_SECTION_BOLD:
      return `
        font-weight: 700;
        font-size: 16px;
      `;
    case type.MOBILE_SUB_SECTION:
      return `
        font-weight: 500;
        font-size: 16px;
      `;
    default:
      console.log('defalut');
  }
};
