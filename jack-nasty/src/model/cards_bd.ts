// src/card/card.repository.ts
import { Get, Injectable } from '@nestjs/common';
import { get } from 'http';

// -----------------------------------------------------------------
// ARRAY DE OBJETOS SIMPLES (SIMULANDO O BANCO DE DADOS)
// -----------------------------------------------------------------
// Note que não estamos usando uma interface, a tipagem é implícita.
const cardDatabase = [
  {
    id: 1,
    holderName: "Alice S. Lima",
    lastFourDigits: "4321",
    flag: "MasterCard",
    expirationDate: "05/26",
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    holderName: "Bob J. Silva",
    lastFourDigits: "8765",
    flag: "Visa",
    expirationDate: "10/24",
    isActive: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    holderName: "Charlie R. Alves",
    lastFourDigits: "1111",
    flag: "Elo",
    expirationDate: "03/27",
    isActive: false, // Cartão inativo
    createdAt: new Date(),
  },
  {
    id: 4,
    holderName: "Dana M. Pereira",
    lastFourDigits: "9999",
    flag: "Amex",
    expirationDate: "01/25",
    isActive: true,
    createdAt: new Date(),
  },
  // Mais 11 cartões simples para chegar a 15
  { id: 5, holderName: "Elias V. Rocha", lastFourDigits: "5001", flag: "Visa", expirationDate: "11/26", isActive: true, createdAt: new Date() },
  { id: 6, holderName: "Fabi C. Gomes", lastFourDigits: "5002", flag: "MasterCard", expirationDate: "07/25", isActive: true, createdAt: new Date() },
  { id: 7, holderName: "Gustavo B. Dias", lastFourDigits: "5003", flag: "Elo", expirationDate: "04/24", isActive: true, createdAt: new Date() },
  { id: 8, holderName: "Helena T. Neves", lastFourDigits: "5004", flag: "Visa", expirationDate: "09/27", isActive: true, createdAt: new Date() },
  { id: 9, holderName: "Igor Z. Costa", lastFourDigits: "5005", flag: "Amex", expirationDate: "12/26", isActive: false, createdAt: new Date() },
  { id: 10, holderName: "Júlia X. Matos", lastFourDigits: "5006", flag: "MasterCard", expirationDate: "06/25", isActive: true, createdAt: new Date() },
  { id: 11, holderName: "Kevin L. Dantas", lastFourDigits: "5007", flag: "Visa", expirationDate: "08/24", isActive: true, createdAt: new Date() },
  { id: 12, holderName: "Laura P. Ramos", lastFourDigits: "5008", flag: "Elo", expirationDate: "02/27", isActive: true, createdAt: new Date() },
  { id: 13, holderName: "Marco W. Abreu", lastFourDigits: "5009", flag: "MasterCard", expirationDate: "03/26", isActive: true, createdAt: new Date() },
  { id: 14, holderName: "Nina K. Brito", lastFourDigits: "5010", flag: "Visa", expirationDate: "07/25", isActive: false, createdAt: new Date() },
  { id: 15, holderName: "Otávio Q. Rocha", lastFourDigits: "5011", flag: "Amex", expirationDate: "04/24", isActive: true, createdAt: new Date() },
];


@Injectable()
export class CardRepository {
    
    // Agora o Repositório apenas retorna o array diretamente
    findAll() {
        return cardDatabase;
    }

    // Você ainda pode criar outros métodos para buscar, criar, etc.
    // Ex:
    @Get
    findOne(id: number) {
        return cardDatabase.find(card => card.id === id);
    }
    // **Nota:** Para criar novos cartões, você precisaria de uma função que
    // recebe um objeto novo e o adiciona ao array, mas como estamos focando
    // em objetos literais, este array é o nosso "dado inicial".
}
