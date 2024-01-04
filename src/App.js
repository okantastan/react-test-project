import logo from "./logo.svg";
import { useEffect } from "react";
import styles from './style.scss'

import './tailwind.css';

import Button from "./Button";
import Tailwind from "./Tailwind";

function App() {
  return (
    <>

        <Button text="Tailwind Button" />
        <Button text="Tailwind Button" variant="success" />
        <Button text="Tailwind Button" variant="danger" />
        <Button text="Tailwind Button" variant="warning" />

        
    </>
  );
}

export default App;
