import { Card } from './card_model';

export let nextId = 16;

export const cardDatabase: Card[] = [
  { id: 1, holderName: "Ana Souza", lastFourDigits: "4321", flag: "MasterCard", expirationDate: "11/27", isActive: true, createdAt: new Date() },
  { id: 2, holderName: "Bruno Alves", lastFourDigits: "8765", flag: "Visa", expirationDate: "10/26", isActive: true, createdAt: new Date() },
  { id: 3, holderName: "Carla Pires", lastFourDigits: "1111", flag: "Elo", expirationDate: "03/24", isActive: false, createdAt: new Date() },
  { id: 4, holderName: "Daniel Melo", lastFourDigits: "9999", flag: "Amex", expirationDate: "01/25", isActive: true, createdAt: new Date() },
  { id: 5, holderName: "Erica Goes", lastFourDigits: "5001", flag: "Visa", expirationDate: "11/26", isActive: true, createdAt: new Date() },
  { id: 6, holderName: "Fernando Reis", lastFourDigits: "5002", flag: "MasterCard", expirationDate: "07/25", isActive: true, createdAt: new Date() },
  { id: 7, holderName: "Giovana Vianna", lastFourDigits: "5003", flag: "Elo", expirationDate: "04/24", isActive: false, createdAt: new Date() },
  { id: 8, holderName: "Hugo Zang", lastFourDigits: "5004", flag: "Visa", expirationDate: "09/27", isActive: true, createdAt: new Date() },
  { id: 9, holderName: "Isabela Lara", lastFourDigits: "5005", flag: "Amex", expirationDate: "12/26", isActive: true, createdAt: new Date() },
  { id: 10, holderName: "João Teixeira", lastFourDigits: "5006", flag: "MasterCard", expirationDate: "06/25", isActive: true, createdAt: new Date() },
  { id: 11, holderName: "Kelly Santos", lastFourDigits: "5007", flag: "Visa", expirationDate: "08/24", isActive: true, createdAt: new Date() },
  { id: 12, holderName: "Lucas Morais", lastFourDigits: "5008", flag: "Elo", expirationDate: "02/27", isActive: true, createdAt: new Date() },
  { id: 13, holderName: "Mariana Costa", lastFourDigits: "5009", flag: "MasterCard", expirationDate: "03/26", isActive: true, createdAt: new Date() },
  { id: 14, holderName: "Nelson Dias", lastFourDigits: "5010", flag: "Visa", expirationDate: "07/25", isActive: true, createdAt: new Date() },
  { id: 15, holderName: "Olivia Gomes", lastFourDigits: "5011", flag: "Amex", expirationDate: "04/24", isActive: true, createdAt: new Date() },
];
