function DisplayTransaction(transaction)
{
   return `<h3>${transaction.nom_client}</h3><h4>${transaction.montant}</h4>`
}

function DisplayAllTransactions(transactions)
{
    return `
    <table>
    <tr>
    ${transaction.nom_client}</h3><h4>${transaction.montant}
    </tr>
    </table>`  
}

module.exports.DisplayTransaction=DisplayTransaction

