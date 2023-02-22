const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://mongo:27017/getapet"); //mude as credenciais do DB, se necessário
    console.log("Conectado ao Banco de Dados");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
