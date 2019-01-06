import React from "react";

import { Button, Icon } from "semantic-ui-react";

import styles from "./AnimatedButton.module.css";

const AnimatedButton = (props) => (
  <Button className={styles.margin} color={props.color || "orange"} inverted onClick={()=>window.open(props.buttonUrl, "_blank")} animated>
    <Button.Content visible>{props.buttonText || "Next"}</Button.Content>
    <Button.Content hidden>
      <Icon name={props.icon || "arrow right"} />
    </Button.Content>
  </Button>    

);

export default AnimatedButton;