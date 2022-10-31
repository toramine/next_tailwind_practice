/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.{js,ts,jsx,tsx}",
    "./pages/profile.{js,ts,jsx,tsx}",
    "./components/layout.{js,ts,jsx,tsx}",
    "./components/topbar.{js,ts,jsx,tsx}",
    "./components/title.{js,ts,jsx,tsx}",
    "./components/created.{js,ts,jsx,tsx}",
    "./components/form.{js,ts,jsx,tsx}",
    "./components/card.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/assets/images/image2.jpg')",
      },
    },
  },
  plugins: [],
};
