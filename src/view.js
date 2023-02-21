const transactions = require("./transaction")

function DisplayTransaction(transaction)
{
   return `
   Nom Client : <h3>${transaction.nom_client}</h3>
   Montant : <h4>${transaction.montant}</h4>
   Date d'excution : <h4>${transaction.dateE}</h4>
   Emetteur  :<h4>${transaction.emetteur}</h4>
   Destinataire : <h4>${transaction.destinataire}</h4>`
}

function DisplayAllTransactions(listTr)
{
    return `<table border=1>
            <tr><td>Id</td><td>Nom Client</td>
            <td>Montant Transaction</td>
            <td>date d'exécution</td>
            <td>émetteur</td>
            <td>destinataire</td>
            </tr>
            ${listTr.map(elem => 
                `<tr>
                <td>${elem.id}</td>
                <td><a href="http://localhost:3000/html/transaction/${elem.id}">${elem.nom_client}</a></td>
                <td>${elem.montant}</td>
                <td>${elem.dateE}</td>
                <td>${elem.emetteur}</td>
                <td>${elem.destinataire}</td>
                </tr>`)}</table>`
}

function addTransaction()
{
    return`<table>
    <form action="/html/save" method="post">
    <tr><td>Nom Client</td><td><input type="text" id="nom_client" value=""/></td></tr>
    <td>Montant Transaction</td><td><input type="text" id="montant" value=""/></td></tr>
    <tr><td><input type="button" onClick="addT()">Save</Button></td>
    </form>
    </table>
    `
}


module.exports.DisplayTransaction=DisplayTransaction
module.exports.DisplayAllTransactions=DisplayAllTransactions
module.exports.addTransaction = addTransaction
