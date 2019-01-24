const icongen = require("icon-gen");
const path = require("path");

const options = {
  report: true,
  ico: {
    name: "app",
    sizes: [16, 24, 32, 48, 64, 128, 256]
  },
  icns: {
    name: "app",
    sizes:  [16, 32, 64, 128, 256, 512, 1024]
  },
  favicon: {
    name: "favicon-",
    sizes:  [32, 57, 72, 96, 120, 128, 144, 152, 195, 228, 512],
    ico: [16, 24, 32, 48, 64]
  }
};


icongen(path.join(__dirname,"../src/resources/icons/pawprint.svg"), path.join(__dirname,"../public/icons/"), options)
  .then((results) => {

    console.log(results)

  })
  .catch((err) => {

    console.error(err)

  });