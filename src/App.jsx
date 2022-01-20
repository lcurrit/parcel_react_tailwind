import React from "react";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className="container mx-auto px-4 lg:max-w-5xl h-full flex flex-col">
      <h1>Hello World!</h1>
      <p className={styles.subtitle}>How you doin&#39;?</p>
    </div>
  );
}
