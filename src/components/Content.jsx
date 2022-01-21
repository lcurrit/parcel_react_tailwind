import React from "react";
import HelloWorld from "./HelloWorld";
import * as styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <HelloWorld />
    </div>
  );
}
