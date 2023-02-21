var transactions = [
    {id:1, nom_client:"c1", montant: 1200, dateE:"12/12/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:2, nom_client:"c2", montant: 1300, dateE:"12/11/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:3, nom_client:"c3", montant: 1400, dateE:"12/10/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:4, nom_client:"c4", montant: 1200, dateE:"12/12/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:5, nom_client:"c5", montant: 1300, dateE:"12/11/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:6, nom_client:"c6", montant: 1400, dateE:"12/10/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:7, nom_client:"c7", montant: 1200, dateE:"12/12/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:8, nom_client:"c8", montant: 1300, dateE:"12/11/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"},
    {id:9, nom_client:"c9", montant: 1400, dateE:"12/10/2023",emetteur:"emetteur CliPri", destinataire:"destinataire CliPri"}
]

function get_transactions(){
    return transactions;
}

function get_transaction(transaction_number)
{
    transaction_number = transaction_number-1
    return transactions[transaction_number];
}

function new_transction(customer_name, amount, dateE, emetteur ,destinataire)
{
    let newTransact = {nom_client:customer_name,montant:amount, dateE, emetteur, destinataire}
    transactions.push(newTransact)
}


module.exports.get_transactions= get_transactions
module.exports.get_transaction= get_transaction
module.exports.new_transction=new_transction
