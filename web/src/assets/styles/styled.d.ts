import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

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
      defaultIconColor: string;
    };
  }
}
