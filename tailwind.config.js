/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/_app.{js,ts,jsx,tsx}",
    "./pages/index.{js,ts,jsx,tsx}",
    "./pages/profile.{js,ts,jsx,tsx}",
    "./components/layout.{js,ts,jsx,tsx}",
    "./components/topbar.{js,ts,jsx,tsx}",
    "./components/title.{js,ts,jsx,tsx}",
    "./components/created.{js,ts,jsx,tsx}",
    "./components/form.{js,ts,jsx,tsx}",
    "./components/card.{js,ts,jsx,tsx}",
    "./components/bottom.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('../public/assets/images/image2.jpg')",
        my_image: "url('../public/assets/images/image1.jpg')",
      },
    },
  },
  plugins: [],
};
