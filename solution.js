import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    { message: "Type in your URL:", name: "url" },
  ])
  .then((answers) => {
    const url = answers.url;
    
    // Generate a QR code image buffer
    const qr_image = qr.imageSync(url, { type: 'png' });

    // Save the QR code image to a file
    fs.writeFileSync("qr_image.png", qr_image);

    // Write the URL to the text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) {
        console.error('Error saving URL:', err);
      } else {
        console.log('The file has been saved!');
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Handle TTY error
    } else {
      // Something else went wrong
    }
  });
