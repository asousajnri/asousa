export default (fontName, nameFolder, weight = "normal", style = "normal") => `
  @font-face {
    font-family: ${fontName};
    src: url(${require(`../../../assets/fonts/${nameFolder}/${weight}.eot`)});
    src: url(${require(`../../../assets/fonts/circular-std/${weight}.eot?#iefix`)}) format('embedded-opentype'),
       url(${require(`../../../assets/fonts/circular-std/${weight}.woff2`)}) format('woff2'),
       url(${require(`../../../assets/fonts/circular-std/${weight}.woff`)}) format('woff'),
       url(${require(`../../../assets/fonts/circular-std/${weight}.ttf`)})  format('truetype'),
       url(${require(`../../../assets/fonts/circular-std/${weight}.svg`)}) format('svg');
    font-weight: ${weight};
    font-style: ${style};
  }
`;