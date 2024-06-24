/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", './src/hero.css',],
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1200px",
        xl: "1500px",
      },
      fontFamily: {
        NunitoBold: "NunitoBold",
        NunitoBlack: "NunitoBlack",
        NunitoSemiBold: "NunitoSemiBold",
        NunitoMedium: "NunitoMedium",
        NunitoRegular: "NunitoRegular",
        NunitoLight: "NunitoLight",
        RobotoBold: "RobotoBold",
        RobotoMedium: "RobotoMedium",
        RobotoRegular: "RobotoRegular",
        RobotoThin: "RobotoThin",
      },
      extend: {
        boxShadow: {
          custom: "0px 5px 10px 0px rgba(0, 0, 0, 0.26)",
          button: "",
          card: "0px 4px 9.800000190734863px 0px #00000014",
        },
        dropShadow: {
          card: "",
        },
        borderColor: {
          button: "1px solid #686868",
        },
        backgroundColor: {
          event: "linear-gradient(215.98deg, #2CA838 14.14%, #4E4E4E 146.06%)",
        },
        colors: {
          RobertoBlack: "#000000",
          RobertoWhite: "#FFFFFF",
          RobertoGrey: "#969696",
          RobertoButter: "#D9D9D9",
          RobertoDark: "#3D3D3D",
          RobertoDark200: "#131313",
          RobertoDark300: "#686868",
          RobertoCream: "#F2F2F2",
          RobertoAsh: "#D9D9D9",
          RobertoLight: "#EFEFEF",
          RobertoGreen: "#2CA838",
          RobertoGreen200: "#4E4E4E",
          RobertoBlack400: "#575757",
          RobertoGrey300: "#555555",
          RobertoGrey100: "#5C5C5C",
          RobertoGrey500: "#606060",
          RobertoGreen50: "#5AB162",
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  };
  
  // https://moreyarovoe.ru
  //  https://www.httrack.com/
  