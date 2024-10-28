import { extendTheme, theme as base } from "@chakra-ui/react";
const fontNames: any = { km: "Noto Sans Khmer Variable", en: "Inter" };

function getTheme(locale?: string) {
  let fontName = fontNames[locale ?? "km"] ?? "Inter";

  return extendTheme({
    colors: {
      primary: {
        "50": "#EAFBF5",
        "100": "#C4F3E4",
        "200": "#9DEBD2",
        "300": "#77E4C1",
        "400": "#51DCAF",
        "500": "#2BD49E",
        "600": "#22AA7E",
        "700": "#1A7F5F",
        "800": "#11553F",
        "900": "#092A20",
      },
      secondary: {
        "50": "#E5FFF7",
        "100": "#B8FFE7",
        "200": "#8AFFD8",
        "300": "#5CFFC9",
        "400": "#2EFFB9",
        "500": "#00FFAA",
        "600": "#00CC88",
        "700": "#009966",
        "800": "#006644",
        "900": "#003322",
      },
      brand: {
        "50": "#FAF1EB",
        "100": "#F0D7C7",
        "200": "#E7BEA2",
        "300": "#DDA47E",
        "400": "#D38A5A",
        "500": "#CA7135",
        "600": "#A15A2B",
        "700": "#794420",
        "800": "#512D15",
        "900": "#28170B",
      },
      success: {
        50: "#e6fdf6",
        100: "#bae7bc",
        200: "#72c993",
        300: "#2b9d75",
        400: "#21775d",
        500: "#1c6c4c",
        600: "#1a5f3e",
        700: "#1a5f3e",
        800: "#1a5f3e",
        900: "#1a5f3e",
      },
      warning: {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#f7c979",
        300: "#f39d3c",
        400: "#ed891d",
        500: "#e76b0c",
        600: "#d95800",
        700: "#d95800",
        800: "#d95800",
        900: "#d95800",
      },
      danger: {
        50: "#fdf2f2",
        100: "#fde6e6",
        200: "#fbc5c5",
        300: "#f89f9f",
        400: "#f06a6a",
        500: "#ed4e4e",
        600: "#d95800",
        700: "#d95800",
        800: "#d95800",
        900: "#d95800",
      },
      basic: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
      },
    },
    fonts: {
      heading: `${fontNames.en}, "${fontNames.km}", ${base.fonts.heading}`,
      body: `${fontNames.en}, "${fontNames.km}", ${base.fonts.body}`,
    },
    styles: {
      global: (props: any) => ({
        "html, body": {
          height: "100%",
          background:
            "https://cdn.axieinfinity.com/500/decoration.png no-repeat 50%",
        },
        body: {
          height: "100%",
          fontSize: locale === "km" ? "20px" : "18px",
          fontWeight:  locale === "km" ? 400 : 500,
          lineHeight: locale === "km" ? "1.6" : "1.4"
        },
      }),
    },
  });
}

export default getTheme;