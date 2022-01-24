import React from "react";
import * as styles from "./HelloWorld.module.css";

interface HelloWorldProps {
  name: string;
}

HelloWorld.defaultProps = {
  name: "World",
};

export default function HelloWorld(props: HelloWorldProps) {
  return <h1 className={styles.decoration}>Hello {props.name}!</h1>;
}
