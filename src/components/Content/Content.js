import React from "react";
import { Grid, Image, Segment, List, Container, Divider } from "semantic-ui-react";
import BackgroundPattern from "../BackgroundPattern/BackgroundPattern";
import RowPictureItem from "../RowPictureItem/RowPictureItem";
import TalkListItem from "../TalkListItem/TalkListItem";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
//import LazyImage from "../LazyImage/LazyImage";

import * as URLS from "../../resources/urls";
import { TEXT } from "../../resources/text";
import IMAGES from "../../resources/images"; 

import styles from "./Content.module.css";


export default class Content extends React.PureComponent {

  renderMyBackground() {

    return(
      <div className={styles.contentItemBackground} id="mybackground">
        <p className={styles.contentItemTitle}>MY BACKGROUND</p>
        <Grid centered stackable>
          <Grid.Column verticalAlign="middle" width={6}>
            <Image rounded bordered centered size="medium" src={IMAGES.me}/>
          </Grid.Column>
          <Grid.Column textAlign="justified" width={10}>
            {TEXT.BACKGROUND}
          </Grid.Column>
        </Grid>        
      </div>
    );

  }

  renderMyWork() {

    return(
      <div id="mywork">
        
        <p className={styles.contentItemTitle}>MY WORK</p>

        <Grid centered stackable>
          <RowPictureItem RowPictureItemClassName="pattern1" imgSrc={IMAGES.instamaps} text={TEXT.INSTAMAPS} buttonText="Visit Instamaps!" buttonUrl={URLS.URL_INSTAMAPS}></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern2" imgSrc={IMAGES.catoffline} text={TEXT.CATOFF} buttonText="Read more" buttonUrl={URLS.URL_CATOFF} reversed="computer"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern3" imgSrc={IMAGES.canhemon} text={TEXT.CANHEMON} buttonText="Read more" buttonUrl={URLS.URL_CANHEMON}></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern4" imgSrc={IMAGES.mapicc} text={TEXT.MAPICC} buttonText="Read more" buttonUrl={URLS.URL_MAPICC} reversed="computer"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern1" imgSrc={IMAGES.ulldeltemps} text={TEXT.ULLDELTEMPS} buttonText="Read more" buttonUrl={URLS.URL_ULLDELTEMPS}></RowPictureItem>   
          <RowPictureItem RowPictureItemClassName="pattern2" imgSrc={IMAGES.onsoc} text={TEXT.ONSOC} buttonText="Read more" buttonUrl={URLS.URL_ONSOC} reversed="computer"></RowPictureItem>   
        </Grid>        
      </div>
    );    

  }

  renderTalksList() {

    return(
      <List divided verticalAlign='middle'>

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk00.buttonUrl} buttonName={TEXT.TALKS.talk00.buttonName} 
          header={TEXT.TALKS.talk00.header} description={TEXT.TALKS.talk00.description}>
        </TalkListItem>

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk01.buttonUrl} buttonName={TEXT.TALKS.talk01.buttonName} 
          header={TEXT.TALKS.talk01.header} description={TEXT.TALKS.talk01.description}>
        </TalkListItem>  

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk02.buttonUrl} buttonName={TEXT.TALKS.talk02.buttonName} 
          header={TEXT.TALKS.talk02.header} description={TEXT.TALKS.talk02.description}>
        </TalkListItem>    

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk03.buttonUrl} buttonName={TEXT.TALKS.talk03.buttonName} 
          header={TEXT.TALKS.talk03.header} description={TEXT.TALKS.talk03.description}>
        </TalkListItem>    

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk04.buttonUrl} buttonName={TEXT.TALKS.talk04.buttonName} 
          header={TEXT.TALKS.talk04.header} description={TEXT.TALKS.talk04.description}>
        </TalkListItem>                                  

      </List>
    );

  }

  renderMyProjects() {

    return(
      <div id="myprojects" className={styles.mainContentColumn}>
        
        <p className={styles.contentItemTitle}>MY PROJECTS</p>

        <Divider hidden></Divider>

        <Grid centered padded stackable>        
          <Grid.Row columns={2} >
            <Grid.Column >
              <Image centered size="medium" src={IMAGES.logo_geochicas_black} />
            </Grid.Column>
            <Grid.Column textAlign="justified">
              {TEXT.GEOCHICAS01}
              {TEXT.GEOCHICAS02}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden></Divider>

        <Container fluid>
          <Image centered size="massive" src={IMAGES.banner_lcdlm2} />
        </Container>
        <Divider hidden></Divider>
        

        <Grid centered padded stackable>        
          <Grid.Row columns={2} >
            <Grid.Column >
              {TEXT.GEOCHICAS03}
            </Grid.Column>
            <Grid.Column textAlign="justified">
              {TEXT.GEOCHICAS04}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container textAlign="center" fluid><AnimatedButton buttonText="Visit the project" buttonUrl={URLS.URL_LCDLM}></AnimatedButton></Container>
        <Divider hidden></Divider>

        <Grid centered padded stackable>
          <Grid.Row textAlign="center" columns={2}>
            <Grid.Column>
              <Image centered bordered size="big" src={IMAGES.lascalles01} />
            </Grid.Column>
            <Grid.Column>
              <Image centered bordered size="big" src={IMAGES.lascalles02} />
            </Grid.Column>            
          </Grid.Row>          
        </Grid>        

        <Divider section></Divider>

        <Grid centered padded stackable>
          <Grid.Row columns={2} >
            <Grid.Column >
              <Image centered size="medium" src={IMAGES.logoosgeo} />
            </Grid.Column>
            <Grid.Column textAlign="justified">
              {TEXT.OSGEO}
              <AnimatedButton buttonText="Visit Advocate Page" buttonUrl={URLS.URL_OSGEO}></AnimatedButton>
            </Grid.Column>
          </Grid.Row>          
        </Grid>

        <Divider section></Divider>

        <div className={styles.segmentTalks} >
          <Segment className={styles.segmentTalksHeader} size="large" attached='top'><p>TALKS</p></Segment>

          <Segment attached>
            {TEXT.TALKS.intro}
            {this.renderTalksList()}
          </Segment>
          
          <Segment className={styles.segmentTalksPictures} attached='bottom'>
            <Grid centered stackable padded >
              <Grid.Row columns={2}>
                <Grid.Column width={8}><Image centered rounded size="small" src={IMAGES.talk00} /></Grid.Column>
                <Grid.Column width={8}><Image centered rounded size="small" src={IMAGES.talk04} /></Grid.Column>
              </Grid.Row>
            </Grid>     
          </Segment>
        </div>
        
      </div>
    );    

  } 

  renderMySkills() {

    return(
      <div id="myskills" className={styles.mainContentColumn}>
        
        <p className={styles.contentItemTitle}>MY SKILLS</p>

        {TEXT.SKILLS}

      </div>
    );

  }
  
  render() {

    return (
      <div >

        {this.renderMyBackground()}
        <Divider section></Divider>
        {this.renderMyWork()}
        
        <BackgroundPattern pttrn="diagonal-gray">
          {this.renderMyProjects()}
        </BackgroundPattern>        

        <BackgroundPattern pttrn="circuit-gray">
          {this.renderMySkills()}
        </BackgroundPattern>


      </div>
    );
  
  }  

}