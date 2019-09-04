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
            <Image alt="My picture profile" rounded bordered centered size="medium" src={IMAGES.me_medium} srcSet={`${IMAGES.me_small} 450w, ${IMAGES.me_small_2x} 900w, ${IMAGES.me_medium_2x} 1500w`} ></Image>
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
          <RowPictureItem RowPictureItemClassName="pattern1" imgSrc={IMAGES.instamaps_medium} text={TEXT.INSTAMAPS} buttonText="Visit Instamaps!" buttonUrl={URLS.URL_INSTAMAPS} alt="instamaps"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern2" imgSrc={IMAGES.catoffline_medium} text={TEXT.CATOFF} buttonText="Read more" buttonUrl={URLS.URL_CATOFF} alt="catoffline" reversed="computer"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern3" imgSrc={IMAGES.canhemon_medium} text={TEXT.CANHEMON} buttonText="Read more" buttonUrl={URLS.URL_CANHEMON} alt="canhemon"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern4" imgSrc={IMAGES.mapicc_medium} text={TEXT.MAPICC} buttonText="Read more" buttonUrl={URLS.URL_MAPICC} alt="mapicc" reversed="computer"></RowPictureItem>
          <RowPictureItem RowPictureItemClassName="pattern1" imgSrc={IMAGES.ulldeltemps_medium} text={TEXT.ULLDELTEMPS} buttonText="Read more" buttonUrl={URLS.URL_ULLDELTEMPS} alt="ulldetemps"></RowPictureItem>   
          <RowPictureItem RowPictureItemClassName="pattern2" imgSrc={IMAGES.onsoc_medium} text={TEXT.ONSOC} buttonText="Read more" buttonUrl={URLS.URL_ONSOC} alt="onsoc" reversed="computer"></RowPictureItem>   
        </Grid>        
      </div>
    );    

  }

  renderTalksList() {

    return(
      <List divided verticalAlign='middle'>

        <TalkListItem 
          buttonUrl={TEXT.TALKS.talk06.buttonUrl} buttonName={TEXT.TALKS.talk06.buttonName} 
          header={TEXT.TALKS.talk06.header} description={TEXT.TALKS.talk06.description}>
        </TalkListItem>

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

        <TalkListItem
          buttonUrl={TEXT.TALKS.talk05.buttonUrl} buttonName={TEXT.TALKS.talk05.buttonName} 
          header={TEXT.TALKS.talk05.header} description={TEXT.TALKS.talk05.description}>
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
              <Image alt="logo geochicas " centered size="medium" src={IMAGES.logo_geochicas_black_medium} srcSet={`${IMAGES.logo_geochicas_black_small} 450w, ${IMAGES.logo_geochicas_black_small_2x} 900w, ${IMAGES.logo_geochicas_black_medium_2x} 1500w`} />
            </Grid.Column>
            <Grid.Column textAlign="justified">
              {TEXT.GEOCHICAS01}
              {TEXT.GEOCHICAS02}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden></Divider>

        <Container fluid>
          <Image alt="banner LCDLM" centered size="massive" src={IMAGES.banner_lcdlm2_medium} srcSet={`${IMAGES.banner_lcdlm2_small} 450w, ${IMAGES.banner_lcdlm2_small_2x} 900w, ${IMAGES.banner_lcdlm2_medium_2x} 1500w`}/>
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
              <Image alt="map image 01" centered bordered size="big" src={IMAGES.lascalles01_medium} srcSet={`${IMAGES.lascalles01_small} 450w, ${IMAGES.lascalles01_small_2x} 900w, ${IMAGES.lascalles01_medium_2x} 1500w`}/>
            </Grid.Column>
            <Grid.Column>
              <Image alt="map image 02" centered bordered size="big" src={IMAGES.lascalles02_medium} srcSet={`${IMAGES.lascalles02_small} 450w, ${IMAGES.lascalles02_small_2x} 900w, ${IMAGES.lascalles02_medium_2x} 1500w`}/>
            </Grid.Column>            
          </Grid.Row>          
        </Grid>        

        <Divider section></Divider>

        <Grid centered padded stackable>
          <Grid.Row columns={2} >
            <Grid.Column >
              <Image alt="logo OSGEO" centered size="medium" src={IMAGES.logoosgeo_medium} srcSet={`${IMAGES.logoosgeo_small} 450w, ${IMAGES.logoosgeo_small_2x} 900w, ${IMAGES.logoosgeo_medium_2x} 1500w`}/>
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
                <Grid.Column width={8}><Image alt="Talk 00" centered rounded size="small" src={IMAGES.talk00_small} srcSet={`${IMAGES.talk00_medium} 750w, ${IMAGES.talk00_small_2x} 900w, ${IMAGES.talk00_medium_2x} 1500w`}/></Grid.Column>
                <Grid.Column width={8}><Image alt="Talk 04" centered rounded size="small" src={IMAGES.talk04_small} srcSet={`${IMAGES.talk04_medium} 750w, ${IMAGES.talk04_small_2x} 900w, ${IMAGES.talk04_medium_2x} 1500w`}/></Grid.Column>
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
        <Divider hidden/>
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