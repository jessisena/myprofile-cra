import React, { PureComponent } from "react";
import { Sticky, Icon } from "semantic-ui-react";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import styles from "./App.module.css";
import * as URLS from "../resources/urls";

import "typeface-open-sans";
import "typeface-open-sans-condensed";

class App extends PureComponent {

  constructor(props) {

    super(props);
    this.state = {};

  }

  handleContextRef = contextRef => this.setState({ contextRef })

  renderHeader() {

    return(
      <div className={styles.myHeader}>
        <h1 className={styles.title}>Hi, I'm Jessica Sena</h1>
        <p className={styles.subtitle}>
        Computer Engineer + Postgraduate in UX Design.<br/> 
        Web developer.<br/> 
        Mobile developer.<br/> 
        GIS developer.
        </p>          
      </div>      
    ); 
  
  }

  renderFooter() {

    return(
      <div className={styles.footer}>
        <h2 className={styles.title}>Contact</h2>
        <div>          
          <p><Icon name="envelope" />  <a href={URLS.MAILTO_JESSISENA}>jessisena@gmail.com</a></p>
          <p><Icon name="linkedin" />  <a href={URLS.URL_LINKEDIN} rel="noopener noreferrer" target="_blank">www.linkedin.com/jessicasenag</a></p>
          <p><Icon name="github" />  <a href={URLS.URL_GITHUB} rel="noopener noreferrer" target="_blank">github.com/jessisena</a></p>
          <p><Icon name="file pdf" />  <a href={URLS.URL_CV} rel="noopener noreferrer" target="_blank">Curriculum in PDF</a></p>
        </div>        
      </div>         
    );

  }

  renderBody() {

    return(
      <div ref={this.handleContextRef}>
        <Sticky context={this.state.contextRef}>
          <NavBar></NavBar>
        </Sticky>        
        <Content/>
      </div>
    );

  }    

  render() {

    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  
  }

}

export default App;
