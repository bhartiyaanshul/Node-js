const fs = require('fs')
const stream = require('stream')

const rs = fs.createReadStream("./sample.txt",{encoding:"utf8"})

const ws = fs.createWriteStream("./new_sample.txt")

rs.on('data', (data)=>{
    ws.write(data)
})