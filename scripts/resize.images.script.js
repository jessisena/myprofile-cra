//import {generateResponsiveImages } from "responsive-images-generator";
const path = require("path");
const generateResponsiveImages = require("responsive-images-generator/lib").generateResponsiveImages;

const doResize = () => {

  const configs = [
  
    {width: "75%", rename: {suffix: "@2x"}},
    {width: "200%", rename: {suffix: "@3x"}},
    {width: "50%", rename: {suffix: "@4x"}},
    {width: "100%", rename: {suffix: "@5x"}}
  ];
  const images = [
    path.join(__dirname, "../src/resources/images/logo_geochicas_black.png"),
  ];
  
  generateResponsiveImages(images, configs);

}

doResize();

