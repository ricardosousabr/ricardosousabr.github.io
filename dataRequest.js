const fs = require('fs');

async function getData() {
  const response = await fetch("http://localhost:1337/api/seo");
   let data = await response.json();
  let dataString = JSON.stringify(data, undefined, 2);
  fs.writeFile('./src/locales/data.json', `${dataString}`, (err) => {
    if (err) {
      console.error('An error occurred while writing to the file:', err);
      return;
    }
  });
}

getData()


