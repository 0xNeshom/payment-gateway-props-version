/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,91,1) 69%)",
      },
    },
  },
  plugins: [],
};
