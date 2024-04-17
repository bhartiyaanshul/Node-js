// Trying to fetch the id specific data

// const URL = 'https://jsonplaceholder.typicode.com/posts/1'

// fetch(URL)
//     .then((response)=>response.json())
//     .then((json)=>console.log(json));

// Trying to fetch all the data

// const URL = 'https://jsonplaceholder.typicode.com/posts'

// fetch(URL)
//     .then((response)=> response.json())
//     .then((json)=>console.log(json))

// Creating the resources (POST):

// const URL = "https://jsonplaceholder.typicode.com/posts"

// fetch(URL,{
//     method:'POST',
//     body: JSON.stringify(
//     {
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     }
//     ),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
//     .then((response)=>response.json())
//     .then((json)=>console.log(json))


// Updating the data (PUT)

// fetch("https://jsonplaceholder.typicode.com/posts/3",{
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'Anshul',
//         body: 'Bhartiya',
//         userId: 3
//     }),
//     headers: {
//         'Content-type':'application/json; charset=UTF-8',
//     }
// })
// .then((response)=>response.json())
// .then((json)=>console.log(json))

// Patching the data (PATCH)

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'Anshul',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'DELETE'
// })