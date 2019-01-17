//import { readdirSync, writeFileSync } from "fs";
const fs = require("fs");

const imageFileNames = () => {

  const array = fs.readdirSync("src/resources/images/dist/")
    .filter((file) => {

      return (file.endsWith(".png") || file.endsWith(".jpg"));
    
    })
    .map((file) => {

      //return file.replace(".png", "").replace(".jpg", "");
      return file;
    
    })

  return Array.from(new Set(array));

}

const generate = () => {

  const properties = imageFileNames()
    .map((name) => {

      return `"${name.replace(".png", "").replace(".jpg", "").replace("@", "_")}": require("./images/dist/${name}")`
    
    })
    .join(",\n  ")
  const string = `const IMAGES = {
  ${properties}
}

export default IMAGES;
`
  fs.writeFileSync("src/resources/images.js", string, "utf8");

}
generate();