/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
					sm: "750px",
					md: "970px",
					lg: "1230px",
          xl: "1326px",
				},
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        lightgray: "#959595",
        extralightgray: "#B2ACA5",
        lightBlack: "#5D5D5D",
        gray: "#757575",
        extralightWhite: "#E9E6E1",
        lightWhite: "#D5CEC7",
        rgbaWhite: "rgba(255, 255, 255, 0.3)",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
        "banner-image": "url(../assets/images/banner-image.jpg)",
      },
      fontSize: {
        h1: ["34px", "1.23"],
        h2: ["70px", "1.21"],
        h3: ["30px", "1.23"],
        h4: ["50px", "1.2"],
        h5: ["44px", "1.2"],
        p: ["22px", "normal"],
      },
    },
  },
  plugins: [],
};