const request = require('request');
const fs = require('fs');

const argu=process.argv.slice(2);
console.log(argu);


request(argu[0], (error, response, body) => {
 
  const content = body;
  fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err)
    return
  }
  })
});



