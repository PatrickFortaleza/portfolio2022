import "../styles/globals.css";
import styles from "../styles/Screen.module.scss";
import { ScreenProvider } from "../src/context/ScreenContext";

function App({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <section id="app-container" className={styles.screen__wrap}>
        <Component {...pageProps} />
      </section>
    </ScreenProvider>
  );
}

export default App;
