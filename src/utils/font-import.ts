const fontImport = (
  fontName: string,
  nameFolder: string,
  weight: any = "normal",
  style: string = "normal"
) => `
    @font-face {
    font-family: ${fontName};

    src:
      url(${require(`../assets/fonts/${nameFolder}/${weight}.eot`)});
    src:
      url(${require(`../assets/fonts/${nameFolder}/${weight}.eot?#iefix`)}) format('embedded-opentype'),
      url(${require(`../assets/fonts/${nameFolder}/${weight}.woff2`)}) format('woff2'),
      url(${require(`../assets/fonts/${nameFolder}/${weight}.woff`)}) format('woff'),
      url(${require(`../assets/fonts/${nameFolder}/${weight}.ttf`)})  format('truetype'),
      url(${require(`../assets/fonts/${nameFolder}/${weight}.svg`)}) format('svg');

    font-weight: ${weight};
    font-style: ${style};
  }`;

export default fontImport;
