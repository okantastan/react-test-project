import logo from "./logo.svg";
import { useEffect } from "react";

import styles from './style.css'

function App() {
  return (
    <div className={styles.App}>
        <>
        <h3>{process.env.NODE_ENV}</h3>
            <img src="/logo192.png" alt="" />
            <img src={logo} alt="" width={500} />
        </>
        
    </div>
  );
}

export default App;
