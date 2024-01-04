import logo from "./logo.svg";
import { useEffect } from "react";

import styles from './style.css'
import './style.scss'
import Bootstrap from "./Bootstrap";

function App() {
  return (
    <div className={styles.App}>
        <>
        <h3>{process.env.NODE_ENV}</h3>
            <img src="/logo192.png" alt="" />
            <img src={logo} alt="" width={500} />
        </>

        <p className="env">
          <span>Test Env</span>
        </p>

        <Bootstrap />
    </div>
  );
}

export default App;
