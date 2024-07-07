import { defineConfig } from "@inkline/config";

export default defineConfig({
  theme: {
    default: {
      animation: {
        duration: "300ms",
        timingFunction: "ease-in-out",
      },
      boxShadow: {
        offsetX: "0",
        offsetY: "0.5rem",
        blurRadius: "1rem",
        spreadRadius: "-0.75rem",
        color: "rgba(0, 0, 0, 0.15)",
      },
      breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        "2xl": 1400,
      },
      color: {
        red: "#A63D34",
        orange: "#de8a46",
        yellow: "#deba46",
        green: "#3fa634",
        teal: "#46decc",
        blue: "#3465a6",
        purple: "#7146de",
        pink: "#A63D34",
        white: "#f7f6f5",
        light: "#f7f6f5",
        gray: "#8A8C97",
        dark: "#1C2238",
        black: "#030305",
        primary: "<% theme.color.blue %>",
        secondary: "<% theme.color.purple %>",
        info: "<% theme.color.teal %>",
        success: "<% theme.color.green %>",
        warning: "<% theme.color.yellow %>",
        danger: "<% theme.color.red %>",
      },
      margin: "1.5rem",
      padding: "1.5rem",
      border: "1px solid var(--color-gray-200)",
      borderRadius: "4px",
      scaleRatio: {
        minorSecond: 1.067,
        majorSecond: 1.125,
        minorThird: 1.2,
        majorThird: 1.25,
        perfectFourth: 1.333,
        augmentedFourth: 1.414,
        perfectFifth: 1.5,
        golden: 1.618,
        primary: "var(--scale-ratio-major-third)",
      },
      size: {
        multiplier: 1,
        percentages: {
          0: "0%",
          25: "25%",
          50: "50%",
          75: "75%",
          100: "100%",
        },
      },
      typography: {
        fontFamily: {
          primary: {
            base: "'Merriweather Sans', 'Helvetica Neue', sans-serif",
            monospace:
              'ui-monospace, "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace',
            print: "'Georgia', 'Times New Roman', 'Times', serif",
          },
          secondary: {
            base: "var(--font-family-primary-base)",
            monospace: "var(--font-family-primary-monospace)",
            print: "var(--font-family-primary-print)",
          },
        },
        fontWeight: {
          extralight: 200,
          light: 300,
          normal: "normal",
          semibold: 600,
          bold: "bold",
          black: 900,
          lighter: "lighter",
          bolder: "bolder",
        },
        fontSize: "1.2rem",
        lineHeight: 1.5,
        letterSpacing: 0,
        color: {
          dark: "var(--color-dark)",
          weak: "var(--color-gray-700)",
          weaker: "var(--color-gray-500)",
          weakest: "var(--color-gray-300)",
          light: "var(--color-light)",
        },
        contrastColor: {
          light: "var(--color-gray-900)",
          dark: "var(--color-white)",
        },
      },
      elements: {
        code: {
          color: "var(--color-red)",
          background: "var(--color-gray-50)",
        },
        body: {
          background: "var(--color-light)",
          backgroundAlt: "var(--color-dark-tint-200)",
          backgroundAlt2: "var(--color-light-alpha-50)",
          border: {
            color: "var(--color-dark-alpha-50)",
          },
          color: "var(--color-dark)",
          colorAlt: "var(--color-light-shade-50)",
        },
        grid: {
          columns: 12,
          gutter: "28px",
          xs: {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-xs))",
            width: "100%",
          },
          sm: {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-sm))",
            width: "calc(var(--breakpoint-sm) - var(--grid--sm--gutter))",
          },
          md: {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-md))",
            width: "calc(var(--breakpoint-md) - var(--grid--md--gutter))",
          },
          lg: {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-lg))",
            width: "calc(var(--breakpoint-lg) - var(--grid--lg--gutter))",
          },
          xl: {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-xl))",
            width: "calc(var(--breakpoint-xl) - var(--grid--xl--gutter))",
          },
          "2xl": {
            gutter: "calc(var(--grid--gutter) * var(--size-multiplier-2xl))",
            width: "calc(var(--breakpoint-2xl) - var(--grid--2xl--gutter))",
          },
        },
        d1: {
          fontSize:
            "calc(var(--font-size) * var(--scale-ratio-pow-5) * var(--scale-ratio-pow-5))",
        },
        d2: {
          fontSize:
            "calc(var(--font-size) * var(--scale-ratio-pow-5) * var(--scale-ratio-pow-4))",
        },
        d3: {
          fontSize:
            "calc(var(--font-size) * var(--scale-ratio-pow-5) * var(--scale-ratio-pow-3))",
        },
        d4: {
          fontSize:
            "calc(var(--font-size) * var(--scale-ratio-pow-5) * var(--scale-ratio-pow-2))",
        },
        d5: {
          fontSize:
            "calc(var(--font-size) * var(--scale-ratio-pow-5) * var(--scale-ratio-pow-1))",
        },
        d6: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-5))",
        },
        h1: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-5))",
        },
        h2: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-4))",
        },
        h3: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-3))",
        },
        h4: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-2))",
        },
        h5: {
          fontSize: "calc(var(--font-size) * var(--scale-ratio-pow-1))",
        },
        h6: {
          fontSize: "var(--font-size)",
        },
      },
      variants: {
        borderRadius: {
          xs: {
            multiply: "var(--size-multiplier-xs)",
          },
          sm: {
            multiply: "var(--size-multiplier-sm)",
          },
          md: {
            multiply: "var(--size-multiplier-md)",
          },
          lg: {
            multiply: "var(--size-multiplier-lg)",
          },
          xl: {
            multiply: "var(--size-multiplier-xl)",
          },
        },
        color: {
          primary: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          secondary: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          info: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          success: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          warning: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          danger: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          gray: {
            50: {
              lightness: 95,
            },
            100: {
              lightness: 90,
            },
            200: {
              lightness: 80,
            },
            300: {
              lightness: 70,
            },
            400: {
              lightness: 60,
            },
            500: {
              lightness: 50,
            },
            600: {
              lightness: 40,
            },
            700: {
              lightness: 30,
            },
            800: {
              lightness: 20,
            },
            900: {
              lightness: 10,
            },
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
          },
          light: {
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
            "alpha-10": {
              alpha: 0.1,
            },
            "alpha-25": {
              alpha: 0.25,
            },
            "alpha-50": {
              alpha: 0.5,
            },
            "alpha-75": {
              alpha: 0.75,
            },
            "alpha-90": {
              alpha: 0.9,
            },
          },
          dark: {
            "shade-150": {
              darken: 15,
            },
            "shade-100": {
              darken: 10,
            },
            "shade-50": {
              darken: 5,
            },
            "shade-10": {
              darken: 15,
              saturate: -0.5,
            },
            "tint-50": {
              lighten: 5,
            },
            "tint-100": {
              lighten: 10,
            },
            "tint-150": {
              lighten: 15,
            },
            "tint-200": {
              lighten: 65,
              saturate: -0.1,
            },
            "alpha-10": {
              alpha: 0.1,
            },
            "alpha-25": {
              alpha: 0.25,
            },
            "alpha-50": {
              alpha: 0.5,
            },
            "alpha-75": {
              alpha: 0.75,
            },
            "alpha-90": {
              alpha: 0.9,
            },
          },
          black: {
            "alpha-10": {
              alpha: 0.1,
            },
            "alpha-25": {
              alpha: 0.25,
            },
            "alpha-50": {
              alpha: 0.5,
            },
            "alpha-75": {
              alpha: 0.75,
            },
            "alpha-90": {
              alpha: 0.9,
            },
            "alpha-95": {
              alpha: 0.95,
            },
          },
        },
        margin: {
          2: {
            multiply: 2,
          },
          3: {
            multiply: 3,
          },
          4: {
            multiply: 4,
          },
          5: {
            multiply: 5,
          },
          xs: {
            multiply: "var(--size-multiplier-xs)",
          },
          sm: {
            multiply: "var(--size-multiplier-sm)",
          },
          md: {
            multiply: "var(--size-multiplier-md)",
          },
          lg: {
            multiply: "var(--size-multiplier-lg)",
          },
          xl: {
            multiply: "var(--size-multiplier-xl)",
          },
          "1-5": {
            divide: 5,
          },
          "1-4": {
            divide: 4,
          },
          "3-4": {
            divide: 4,
            multiply: 3,
          },
          "1-3": {
            divide: 3,
          },
          "2-3": {
            divide: 3,
            multiply: 2,
          },
          "1-2": {
            divide: 2,
          },
        },
        padding: {
          2: {
            multiply: 2,
          },
          3: {
            multiply: 3,
          },
          4: {
            multiply: 4,
          },
          5: {
            multiply: 5,
          },
          xs: {
            multiply: "var(--size-multiplier-xs)",
          },
          sm: {
            multiply: "var(--size-multiplier-sm)",
          },
          md: {
            multiply: "var(--size-multiplier-md)",
          },
          lg: {
            multiply: "var(--size-multiplier-lg)",
          },
          xl: {
            multiply: "var(--size-multiplier-xl)",
          },
          "1-5": {
            divide: 5,
          },
          "1-4": {
            divide: 4,
          },
          "3-4": {
            divide: 4,
            multiply: 3,
          },
          "1-3": {
            divide: 3,
          },
          "2-3": {
            divide: 3,
            multiply: 2,
          },
          "1-2": {
            divide: 2,
          },
        },
        size: {
          multiplier: {
            "2xs": {
              divide: "var(--scale-ratio-pow-3)",
            },
            xs: {
              divide: "var(--scale-ratio-pow-2)",
            },
            sm: {
              divide: "var(--scale-ratio-pow-1)",
            },
            md: {},
            lg: {
              multiply: "var(--scale-ratio-pow-1)",
            },
            xl: {
              multiply: "var(--scale-ratio-pow-2)",
            },
            "2xl": {
              multiply: "var(--scale-ratio-pow-3)",
            },
          },
        },
        typography: {
          fontSize: {
            xs: {
              multiply: "var(--size-multiplier-xs)",
            },
            sm: {
              multiply: "var(--size-multiplier-sm)",
            },
            md: {
              multiply: "var(--size-multiplier-md)",
            },
            lg: {
              multiply: "var(--size-multiplier-lg)",
            },
            xl: {
              multiply: "var(--size-multiplier-xl)",
            },
          },
        },
      },
    },
    dark: {
      border: {
        color: "var(--color-gray-700)",
      },
      typography: {
        color: {
          weak: "var(--color-gray-300)",
          weaker: "var(--color-gray-500)",
          weakest: "var(--color-gray-700)",
        },
      },
      elements: {
        code: {
          color: "var(--color-red)",
          background: "var(--color-gray-900)",
        },
        body: {
          background: "var(--color-dark)",
          backgroundAlt: "var(--color-dark-shade-50)",
          backgroundAlt2: "var(--color-light-alpha-10)",
          border: {
            color: "var(--color-light-alpha-50)",
          },
          color: "var(--color-light)",
          colorAlt: "var(--color-dark-tint-150)",
        },
      },
    },
  },
});
