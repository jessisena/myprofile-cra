import React from "react";

import { Grid, Image } from "semantic-ui-react";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import styles from "./RowPictureItem.module.css";

const RowPictureItem = (props) => (
  <Grid.Row className={styles[props.RowPictureItemClassName] || ""} reversed={props.reversed || ""}>
    <Grid.Column verticalAlign="middle" width={6}>
      <Image rounded bordered centered size="medium" src={props.imgSrc} alt={props.alt || "Row Picutre"}/>
    </Grid.Column>
    <Grid.Column className={styles.text} textAlign="justified" width={10}>
      {props.text}
      {props.buttonText && <AnimatedButton buttonText={props.buttonText} buttonUrl={props.buttonUrl}></AnimatedButton>}
    </Grid.Column>
  </Grid.Row> 

);

export default RowPictureItem;