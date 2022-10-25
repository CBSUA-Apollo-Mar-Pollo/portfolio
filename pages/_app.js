import "../styles/globals.css";
import "../styles/App.global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
