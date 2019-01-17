//import {generateResponsiveImages } from "responsive-images-generator";
const path = require("path");
const generateResponsiveImages = require("responsive-images-generator");

const doResize = () => {

  const configs = [
    {width: "20%", rename: {suffix: "@1x"}},
    {width: "40%", rename: {suffix: "@2x"}},
    {width: "60%", rename: {suffix: "@3x"}},
    {width: "80%", rename: {suffix: "@4x"}},
    {width: "100%", rename: {suffix: "@5x"}}
  ];
  const images = [
    path.join(__dirname, "../src/resources/images/canhemon.jpg"),
    path.join(__dirname, "../src/resources/images/catoffline.jpg"),
  ];
  
  generateResponsiveImages(images, configs);

}

doResize();