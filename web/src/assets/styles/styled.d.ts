import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      white: string;
      black: string;
      grey: string;
      text: string;
    };

    page: {
      body: string;
    };

    profile: {
      info: string;
      icon: string;
      icon_hover: string;
    };
  }
}
