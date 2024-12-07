// src/pages/_app.js
import AppProvider from "@/Component/Context/context";
import "../styles/globals.css"; // Import your global CSS file here

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
