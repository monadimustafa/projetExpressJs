var express = require('express');
var app = express();
const port = 3000
const transactions = require("./src/transaction")
const view = require("./src/view")
app.use(express.static('public'))
app.use(express.json())



app.get('/get-transactions',(req,res)=>{
    res.json(transactions.get_transactions())
})

app.get('/get-transaction/:id',(req,res)=>{
  let id = req.params.id
  res.json(transactions.get_transaction(id))
  
})
app.get('/html/transaction/:id',(req,res)=>{
  let id = req.params.id
  let result = transactions.get_transaction(id)
  res.send(view.DisplayTransaction(result))
})

app.post('/add-transaction',(req,res)=>
{
    nom_client = req.body.nom_client
    montant = req.body.montant
    transactions.new_transction(nom_client,montant)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})