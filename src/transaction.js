var transactions = [
    {nom_client:"c1", montant: 1200},
    {nom_client:"c2", montant: 1300},
    {nom_client:"c3", montant: 1400},
]

function get_transactions(){
    return transactions;
}

function get_transaction(transaction_number)
{
    return transactions[transaction_number];
}

function new_transction(customer_name, amount)
{
    let newTransact = {nom_client:customer_name,montant:amount}
    transactions.push(newTransact)
}

module.exports.get_transactions= get_transactions
module.exports.get_transaction= get_transaction
module.exports.new_transction=new_transction
