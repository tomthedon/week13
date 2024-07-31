ocnst express = require("express")
const axios = require("axios")
const PORT = 3000
const app = express();
app.use(express.json())
app.get("/books", (req, res) => {
    axios.get("https://api.potterdb.com/v1/books").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/book", async (req, res) => {
    try {
        let bookId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/books/${bookId}`)
        console.log(response.data)
        res.send(response.data)
    } catch (err) {
        res.send(err)
    }
})
app.get("/movies",(req, res) => { axios.get("https://api.potterdb.com/v1/movies").then((data) => { console.log(data.data); res.send(data.data) }).catch((err) => res.send(err))
})
app.post("/movies", async (req,res) => {
    try {
        let moviesId = req.body.id;
        let response = await axios.get(`https://api.potterdb.com/v1/movies/${moviesId}`)
        console.log(response.data)
        res.send(response.data)
     } catch (err) {
        res.send(err)
     }
})
app.listen(PORT, () => {
    console.log(`express server running at localhost:${PORT}`)
})