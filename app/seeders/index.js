const faker = require("faker");

const amount = Array.from(Array(25).keys());

const contatos = new Array();

amount.map((element) => {
  let contato = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    endereco: faker.address.streetAddress(),
    bairro: faker.address.state(),
    numero: Math.floor(Math.random() * (555 - 1 + 1)) + 1,
    cep: faker.address.zipCode(),
    cidade: faker.address.city(),
    estado: faker.address.stateAbbr(),
    telefone: faker.phone.phoneNumber(),
  };
  contatos.push(contato);
});

module.exports = contatos;
