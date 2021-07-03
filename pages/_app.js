import "../styles/globals.css";
import "../styles/main.scss";
import styles from "../styles/modules/Screen.module.scss";
import { ScreenProvider } from "../src/context/ScreenContext";
import Head from "next/head";
import HeaderCtrl from "../src/components/Header/controller";

function App({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/asp3pmk.css" />
      </Head>
      <section id="app-container">
        <HeaderCtrl />
        <Component {...pageProps} />
      </section>
    </ScreenProvider>
  );
}

export default App;
