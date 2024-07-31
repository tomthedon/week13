const express = require("express")
const axios = require("axios")
const PORT = 3000
const app = express();
app.use(express.json())
app.get("/charcaters", (req, res) => {
    axios.get("https://api.potterdb.com/v1/characters").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/charcaters", async (req, res) => {
    try {
        let charactersId = req.body.id;
        let response = await axios.get(`GET https://api.potterdb.com/v1/characters/${bookId}`)
        console.log(response.data)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
})
app.get("/potions",(req, res) => { axios.get("https://api.potterdb.com/v1/potions").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/potions", async (req,res) => {
    try {
        let potionsId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/potions/${potionsId}`)
        console.log(response.data)
        res.send(response.data)
     } catch (err) {
        res.send(err)
     }
})
app.listen(PORT, () => {
    console.log(`express server running at localhost:${PORT}`)
})