const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")


connection.authenticate()
    .then(()=> {
        console.log("Conexão efetuada com o banco de dados")
    })
    .catch((msgErro)=> {
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/",(req, res) =>{
    res.render("index")
})
app.get("/asking", (req,res) =>{
    res.render('asking')
})
app.post("/savequestions", (req,res) =>{
    const title = req.body.title
    const description = req.body.description
    res.send(`Formulário recebido!
    Titulo: ${title}
    Descrição: ${description}`)
})


app.listen(3000, () => {console.log("server online")})