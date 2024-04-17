const fs = require('fs');
// const content = 'Anshul Bhartiya!';


// try {
//     fs.writeFileSync('./anshul.txt', content);
//     const data = JSON.parse(fs.readFileSync('./anshul.json', 'utf8'));
//     const {name, age} = data;
//     console.log(name);
//     console.log(age);
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile("anshul.txt","Hii i am anshul", function(err){
//     if(err){
//         console.log(err);
//     }
// });

// fs.open("anshul.txt", "w", function(err,data){
//     if(err){
//         console.log(err);
//     }
// });

// fs.unlink("anshul.txt", function(err){
//     if(err){
//         console.log(err);
//     }
// })

// fs.rename("anshul1.txt","anshul.txt",function(err){
//     if(err){
//         console.log(err);
//     }
// })

// fs.mkdir("./new", (err)=>{
//     if(err) throw err;
//     console.log("Directory is created")
// })

// if(!fs.existsSync("./new")){
//     fs.mkdir("./new", (err)=>{
//         if(err) throw err;
//         console.log("Directory is created")
//     })
// }

if(fs.existsSync("./new")){
    fs.rmdir("./new", (err)=>{
        if(err) throw err;
        console.log("Dirctory is deleted")
    })
}

process.on("uncaughtException", err=>{
    console.log("Exception",err)
});
