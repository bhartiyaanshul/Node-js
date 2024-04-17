// const fetch = require('fetch');

// fetch('https://quotes.toscrape.com/random')
//     .then((response) => response.text())
//     .then((body) => {
//         console.log(body);
//     }); 

// const url = 'https://httpbin.org/get'
// fetch(url)
//     .then(response => {
//         for(const pair of response.headers){
//             console.log(`${pair[0]}: ${pair[1]}`); 
//         }
//         return response.text();
//     }).then(data => {
//         console.log(data);
//     });

// const url = 'https://httpbin.org/post'
// const data = {
//     x: 1920,
//     y: 1080,
// };
// const customHeaders = {
//     "Content-Type": "application/json",
// }

// fetch(url, {
//     method: "POST",
//     headers: customHeaders,
//     body: JSON.stringify(data),
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     });

const fs = require('fs/promises');

async function postFile() {

  //Dummy URL to post data
  const url = 'https://httpbin.org/post';

  //Read the file from local directory
  const fileData = await fs.readFile('./anshul.txt');

  //POST the file to the specified URL
  const response = await fetch(url, {
    method: 'POST',
    body: fileData
  });

  //Get the JSON response object
  const data = await response.json();
	
  console.log(data);
}

postFile();