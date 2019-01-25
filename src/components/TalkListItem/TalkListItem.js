import React from "react";

import { List, Button, Responsive, Icon } from "semantic-ui-react";
import styles from "./TalkListItem.module.css";

const TalkListItem = (props) => (

  <List.Item>    
    {props.buttonUrl && 
      <List.Content floated='right'>
        <Responsive 
          as={() =><Icon circular inverted large color={props.color || "teal"} name={props.buttonName || "arrow right"} link onClick={()=>window.open(props.buttonUrl, "_blank")}/>} 
          {...Responsive.onlyComputer} 
          color={props.color || "grey"} 
          inverted 
          onClick={()=>window.open(props.buttonUrl, "_blank")}>
        </Responsive>
      </List.Content>
    }
    <List.Icon floated='left' name='marker' />
    <List.Content>
      <List.Header>{props.header}</List.Header>
      <List.Description> {props.description} </List.Description>
      {props.buttonUrl &&
        <Responsive          
          as={() =><Icon circular className={styles.buttonMobile}  inverted color={props.color || "teal"} name={props.buttonName || "arrow right"} link onClick={()=>window.open(props.buttonUrl, "_blank")}/>} 
          {...Responsive.onlyMobile} 
          color={props.color || "grey"} 
          inverted 
          onClick={()=>window.open(props.buttonUrl, "_blank")}>
        </Responsive>
      }      
    </List.Content>
  </List.Item>  

);

export default TalkListItem;