import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message:"enter your url", name:"url"}
  ])
  .then((answers) => {
    const url = answers.url;
    const qr_image = qr.imageSync(url,{type: "png"});
    fs.writeFileSync("qr_image.png",qr_image);

    fs.writeFile('url.txt', url, (err) => {
      if (err)
       {
        console.log("there is error in your code");
      }
      else {
        console.log('The file has been saved!');
      }
      
    });
   

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });