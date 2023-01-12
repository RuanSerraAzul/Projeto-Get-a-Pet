const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/getapet"); //mude as credenciais do DB
    console.log("Conectado ao Banco de Dados");
}

main().catch((err = console.log(err)));

module.exports = mongoose;
