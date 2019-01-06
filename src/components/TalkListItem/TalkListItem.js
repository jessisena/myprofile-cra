import React from "react";

import { List, Button, Responsive } from "semantic-ui-react";
import styles from "./TalkListItem.module.css";

const TalkListItem = (props) => (

  <List.Item>    
    {props.buttonUrl && 
      <List.Content floated='right'>
        <Responsive 
          as={() =><Button color={props.color || "orange"} inverted onClick={()=>window.open(props.buttonUrl, "_blank")}>{props.buttonName}</Button>} 
          {...Responsive.onlyComputer} 
          color={props.color || "orange"} 
          inverted 
          onClick={()=>window.open(props.buttonUrl, "_blank")}>{props.buttonName}
        </Responsive>
      </List.Content>
    }
    <List.Icon floated='left' name='marker' />
    <List.Content>
      <List.Header as='a'>{props.header}</List.Header>
      <List.Description> {props.description} </List.Description>
      {props.buttonUrl &&
        <Responsive          
          as={() =><Button className={styles.buttonMobile} color={props.color || "orange"} inverted onClick={()=>window.open(props.buttonUrl, "_blank")}>{props.buttonName}</Button>} 
          {...Responsive.onlyMobile} 
          color={props.color || "orange"} 
          inverted 
          onClick={()=>window.open(props.buttonUrl, "_blank")}>{props.buttonName}
        </Responsive>
      }      
    </List.Content>
  </List.Item>  

);

export default TalkListItem;