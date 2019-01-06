import React from "react";
import { Icon } from "semantic-ui-react";

export const TEXT = {
  BACKGROUND: 
    <span><p>I am a Computer Engineer, working since 2013 as a member of Geostart, the <b>innovation group</b> of the Institut Cartogràfic i Geològic de Catalunya.</p>
      <p>My work there includes the development of <b>prototypes and the research of new technologies</b>, as well as the design and <b>development of web applications</b> (front-end and back-end).<br/> *Some exemples of our work at <a href="http://betaportal.icgc.cat/" rel="noopener noreferrer" target="_blank">BETAPORTAL</a>. </p>
      <p>I have also been in charge of several <b>mobile application</b> development projects.</p>
      <p>In addition, as part of Geostart I have acquired a wide knowledge of geotechnologies, working as a <b>GIS developer</b></p>
      <p>In 2016 I finished a postgraduate course in <b>UX Design</b>, aiming to expand my overall vision of the whole development process of a technological product, and complementing my knowledge as a developer, giving it an extra value to the work I do in the projects in which I participate</p>
      <p>This background gives me a very versatile profile and the ability to deal with many different technologies.</p>
    </span>,
  
  INSTAMAPS: 
    <span>
      <p>I worked widely as a front-end and back-en developer in the project InstaMaps.cat, an online web platform to create maps with your own data.</p>
      <p>Right now, the platform has about 9,000 users that have created more than 35,000 maps.</p>
      <p>Based in the following technologies:
        <ul>
          <li><Icon name="check"></Icon>FRONT-END: Javascript + JQuery + Bootstrap and Leaflet.js.</li>
          <li><Icon name="check"></Icon>BACK-END: Java +  Struts + Hibernate and a PostGIS Database</li>
        </ul>
      </p>
    </span>,
    
  CATOFF: 
    <span>
      <p>I’ve fully developed Catalunya Offline, an <b>hybrid mobile app</b> available for Android and IOS, that allows people download the Catalan cartography in their devices and use it in offline mode. Some of the functionalities are: locate you on the map, save waypoints and tracks and add pictures and data to them, load files with external geographical data, and connect all this information with the Instamaps.cat platform.</p>
      <p>Catalunya Offline has been developed with the <a href="https://ionicframework.com/" rel="noopener noreferrer" target="_blank">Ionic Framework</a> (and so, Cordova + Angular).</p>
      <p>Initially it used <a href="http://leafletjs.com/" rel="noopener noreferrer" target="_blank">Leaflet.js</a> + <a href="https://github.com/tombatossals/angular-leaflet-directive" rel="noopener noreferrer" target="_blank">AngularLeaflet</a> for the map functionalities, but now, it’s been refactorized to use <a href="https://www.mapbox.com/mapbox-gl-js/api/" rel="noopener noreferrer" target="_blank">MapboxGL.js</a> + WebGL technology, to take advantage of the <a href="https://www.mapbox.com/vector-tiles/" target="_blank">Vector Tiles</a> system.</p>
      <p>For this purpose, I have developed some interesting new features for the library, in order to make possible to use it in an <b>offline mode</b>: basically, I have added a new VectorTileOffline source and a new RasterOffline source too. Take a look <a href="https://github.com/jessisena/mapbox-gl-js/tree/master/src/source" rel="noopener noreferrer" target="_blank">HERE</a>.</p>      
    </span>,

  CERCAFONTS:
    <span>
      <p>I’ve fully developed Cercafonts, an <b>hybrid mobile app</b> available for Android and IOS, that allows people download the Catalan cartography in their devices and use it in offline mode. Some of the functionalities are: locate you on the map, save waypoints and tracks and add pictures and data to them, load files with external geographical data, and connect all this information with the Instamaps.cat platform.</p>
      <p>Catalunya Offline has been developed with the <a href="https://ionicframework.com/" rel="noopener noreferrer" target="_blank">Ionic Framework</a> (and so, Cordova + Angular).</p>
      <p>Initially it used <a href="http://leafletjs.com/" rel="noopener noreferrer" target="_blank">Leaflet.js</a> + <a href="https://github.com/tombatossals/angular-leaflet-directive" rel="noopener noreferrer" target="_blank">AngularLeaflet</a> for the map functionalities, but now, it’s been refactorized to use <a href="https://www.mapbox.com/mapbox-gl-js/api/" rel="noopener noreferrer" target="_blank">MapboxGL.js</a> + WebGL technology, to take advantage of the <a href="https://www.mapbox.com/vector-tiles/" target="_blank">Vector Tiles</a> system.</p>
      <p>For this purpose, I have developed some interesting new features for the library, in order to make possible to use it in an <b>offline mode</b>: basically, I have added a new VectorTileOffline source and a new RasterOffline source too. Take a look <a href="https://github.com/jessisena/mapbox-gl-js/tree/master/src/source" rel="noopener noreferrer" target="_blank">HERE</a>.</p>      
    </span>
  ,
  CANHEMON:
    <span>
      <p>I've worked in the Canhemon Tree Checker project, for the <a href="https://ec.europa.eu/jrc/en" rel="noopener noreferrer" target="_blank">Joint Research Centre (European Comission)</a>.</p>
                    
      <p>I fully developed the <b>Canhemon mobile application</b>. The main goal of the app is to allow users to collect information about trees directly on the territory, to be stored in a central database. The application also works completely offline, downloading previously the geographical area where the users will work, and synchronizing the data automatically with the server when it detects internet connection.</p>
                    
      <p>Canhemon App has been developed with <a href="https://facebook.github.io/react-native/" rel="noopener noreferrer" target="_blank">React Native</a> + <a href="https://redux.js.org/docs/introduction/" rel="noopener noreferrer" target="_blank">Redux</a>, and it uses <a href="http://leafletjs.com/" target="_blank">Leaflet.js</a> for the map functionalities.</p>
                    
      <p>The full source code of the app is <a href="https://github.com/jessisena/TreeCheckerApp/tree/master/app/treeChecker" rel="noopener noreferrer" target="_blank">HERE</a>.</p>
                                      
    </span>
  ,

  MAPICC:
    <span>
      <p>I've fully developed MapICC, an app to visualize and interact with the Catalan cartography in online and offline mode. MapICC has some simple but nice functionalities like locate you on the map, load your own track files, or find places in the map.</p> 
      <p>MapICC it's been developed as a pure <b>Android native</b> application.</p>                  
    </span>
  ,

  ULLDELTEMPS:
    <span>
      <p>I've also worked developing Ull del temps, an app based in a previous desktop app, L'Ull del temps, that let the users see how are and how were the places where they are, and others. </p> 
      <p>Is an Hybrid app, available for Android and IOS, based in the Ionic framework + Leaflet.js</p>      
    </span>
  ,

  ONSOC:
    <span>
      <p>I've developed OnSóc, a simple app that let the users share their position with other people, in a very easy way, throw social networks and others.</p> 
      <p>Is an Hybrid app, available for Android and IOS, based in the Ionic framework + Leaflet.js</p>
    </span>
  ,

  GEOCHICAS01: <p>I am a member of GeoChicasOSM, a community present in several Spanish-speaking countries, with the aim of closing the gender gap in #OpenStreetMap and in different areas of geo-technologies, enhancing the realization of collaborative projects and contacting women in the sector.</p>,
  GEOCHICAS02: <p>Inside this community I am in charge of the technical development of the project #lasCallesDeLasMujeres / #TheStreetsOfWomen.</p>,
  GEOCHICAS03: 
    <div>
      <p>The main objective of the project is to make visible the scarce representation of women in the public and digital spaces. To achieve it we have done two things:</p>
      <ul>
        <li><Icon name="map" /> Created a world map where the minority that represent the streets named after a women is shown, compared to those named after men.</li>
        <br/>
        <li><Icon name="wikipedia w" /> Linked each of these famous women with their corresponding article in Wikipedia, to also show that many of them do not even appear.</li>
      </ul>
    </div>
  ,
  GEOCHICAS04: 
              <div>
                <p>The project is completely open and collaborative, and we are in process of making it grow:</p>
                <p><Icon name="check" /> Check the Github repositories of the project <a href="https://github.com/geochicasosm"  rel="noopener noreferrer" target="_blank">HERE</a></p>
                <p><Icon name="check" /> Read a bit more extended technical explanation about the project here: <a href="https://medium.com/@jessisena/lascallesdelasmujeres-thestreetsofwomen-meets-mapbox-mapmadness18-9a606c0fa3b6"  rel="noopener noreferrer" target="_blank">#LasCallesDeLasMujeres (TheStreetsOfWomen) meets Mapbox #mapmadness18</a></p>
              </div>,  
  OSGEO: 
    <div>
      <p>Since October 2018 I am also a charter member of Open Source Geospatial Foundation (OSGEO), a non-profit non-governmental organization whose mission is to support and promote the collaborative development of open geospatial technologies and data.</p>
      <p>As a charter member I am also an OSGEO advocate: </p>
    </div>,

  TALKS: {
    intro: <p>These are the talks/workshops in which I have participated lately:</p>,
    talk00: {
      header: "#LasCallesDeLasMujeres and GeoChicas",
      description: <p><a href="https://www.udemy.com/react-native-advanced/" rel="noopener noreferrer" target="_blank">Smart City Expo 2018</a>, (November 2018), collaborating in the panel <b>Digital platforms and gender perspective</b></p>,
      buttonUrl: "https://drive.google.com/file/d/1N-uww4tunWHx8U4BG_A1QkrbOtX2umWj/view?usp=sharing",
      buttonName: "SLIDES" 
    },
    talk01: {
      header: "Ús de dades obertes a les apps",
      description: <p><a href="https://dadesxdones.iniciativabarcelonaopendata.cat/programa_hackato/" rel="noopener noreferrer" target="_blank">Hackató DadesXDones</a> (June 2018). </p>,
      buttonUrl: "https://drive.google.com/file/d/1htSQ4qmoABWYXSZkuuDdQALdrMd5rs0h/view?usp=sharing",
      buttonName: "SLIDES"      
    },
    talk02: {
      header: "Technical workshop about #LasCallesDeLasMujeres",
      description: <p><b>Technical workshop about #LasCallesDeLasMujeres</b> (May 2018). </p>,
      buttonUrl: "https://www.youtube.com/watch?v=i5s6JoG4cCo",
      buttonName: "VIDEO"      
    },
    talk03: {
      header: "Workshop about hiking tools and services",
      description: <p><a href="http://aetalaia.cat/wp-content/uploads/2018/10/20181108_SESSI%C3%93-ICGC.pdf" rel="noopener noreferrer" target="_blank">Centre excursionista Talaia</a> (November 2018)</p>    
    },
    talk04: {
      header: "Workshop about apps and tools of ICGC",
      description: <p><a href="http://aetalaia.cat/wp-content/uploads/2018/10/20181108_SESSI%C3%93-ICGC.pdf" rel="noopener noreferrer" target="_blank">Centre excursionista Talaia</a> (November 2018)</p>    
    }   
  },

  PUBLICATIONS: 
      <div>
        <p>Service-Oriented Map Production Environments: The Implementation of InstaMaps. https://www.researchgate.net/publication/325652793_Service-Oriented_Map_Production_Environments_The_Implementation_of_InstaMaps, Roset, R. et al (2018).Service-Oriented Map Production Environments: The Implementation of Instamaps. In Döllner, J. & Jobst, M. & Schmitz, P. (Eds.), Service-Oriented Mapping (pp. 107-123). Springer International Publishing 
        </p>
      </div>,
  SKILLS: 
      <span>
        <p> <Icon name="check" /> Very comfortable developing <b>JavaScript</b> large applications and good knowledge about <b>HTML5</b> and <b>CSS3/SASS</b>.      
        </p>
        <p><Icon name="check" /> Back-end experience developing with Node and Express (and also JAVA, of course!).</p>
        <p><Icon name="check" /> My current preferred front end technology to work is React, and I have good experience with it (even with Redux). But I also have a good knowledge of Angular 1 and Angular 2.</p>
        <p> <Icon name="check" /> Wide experience developing hybrid apps. Although I've worked deeply with Ionic Framework, currently I'm working intensively with <b>React Native</b>.</p>
        <p> <Icon name="check" /> Good knowledge about the geo scope: I know <b>OpenLayers</b> and I've worked extensively with <b>Leaflet.js</b>. But nowadays I’m using <b>MapboxGL JS</b> as a preferred framework to work with. In fact, I’ve just developed some interesting new features for this library to make possible using it in an offline mode (as I have explained HERE).</p>
        <p> <Icon name="check" /> Not afraid about learning and discover new frameworks and technologies. Moreover, I really enjoy doing it! That’s why I always try to make my best to improve my skills, assisting as many conferences/meetings related with technology as I can, as well as doing courses and reading books and articles. </p>        
      </span>    
  ,    
  COURSES: {
    title: "Some of my latest courses",
    text: 
        <span>
          <p><a href="https://www.udemy.com/the-complete-react-native-and-redux-course" target="_blank">The Complete React Native and Redux Course</a> by Stephen Grider.</p>
          <p><a href="https://www.udemy.com/top-javascript-interview-questions-and-answers/" target="_blank">Advanced JavaScript</a> by Asim Hussain.</p>
          <p><a href="https://www.udemy.com/es6-bootcamp-next-generation-javascript/" target="_blank">Accelerated ES6 JavaScript Training</a> by Maximilian Schwarzmüller.</p>
          <p><a href="" target="_blank">The Complete React Web App Developer Course</a> by Andrew Mead.</p>
          <p><a href="https://www.udemy.com/learn-gulp/" target="_blank">Automate Web Development With Gulp JS</a> by Andrew Mead.</p>
          <p><a href="https://www.udemy.com/learn-angularjs/" target="_blank">Learn and Understand AngularJS</a> by Anthony Alicea.</p>
        </span>
  },
  ROADMAP: {
    title: "RoadMap: what's next?",
    text: 
          <span>
            <p> Become a React-Native "master". I'll start by doing this course: <a href="https://www.udemy.com/react-native-advanced/" target="_blank">React Native: Advanced Concepts</a> by Stephen Grider.</p>
            <p>Improve my programming methodology reading the already "classical" book <a href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882" target="_blank">Clean Code: A Handbook of Agile Software Craftsmanship (Robert C. Martin)</a></p>
            <p>To Level Up and become a better front-end developer (in all possible ways), following this awesome  <a href="https://hackernoon.com/a-120-days-plan-to-become-a-better-developer-120daysbetterdev-4c3bbbdf31ee" target="_blank">120 days programme</a>, by Léna Faure.</p>
          </span>
  },    


}

