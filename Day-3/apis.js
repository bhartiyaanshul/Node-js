const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.json());
const port = 3000

app.post('/',(req,res)=>{
    const {name, surename, phone, address} = req.query
    res.send(name+surename+phone+address)
    const content = {
        name: name,
        surename: surename,
        surename: surename,
        phone: phone,
        address: address
    }
    fs.writeFileSync('./output.json',JSON.stringify(content,null,4))
})

app.post('/', (req, res) => {
    const { name, surename, phone, address } = req.body
    console.log(req.body)
    res.send(name + surename + phone + address)
    const content = {
        name: name,
        surename: surename,
        phone: phone,
        address: address
    }

    const fileExists = fs.existsSync('./output.json')
    if(fileExists){
        const data = fs.readFileSync('./output.json')
        if (data) {
            const parsedData = JSON.parse(data)
            parsedData.push(content)
            fs.writeFileSync('./output.json', JSON.stringify(parsedData, null, 4))
        }
    } else {
        const parsedContent = [content]
        fs.writeFileSync('./output.json', JSON.stringify(parsedContent, null, 4))
    }
})

app.get('/', (req, res) => {

    // STRING REPONSE

    // const data = JSON.parse(fs.readFileSync('./output.json','utf8'))
    // const {name,surename,phone,address} = data
    // res.send(`Name: ${name} \n Surename: ${surename} \n Phone: ${phone} \n Address: ${address}`)

    // JSON RESPONSE
    const data = fs.readFileSync('./output.json', 'utf8')
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})