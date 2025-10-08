export class Card {
  // O ID único do cartão
  id: number;
  // O nome do titular do cartão
  holderName: string;
  // Os últimos 4 dígitos do cartão (Nunca armazene o número completo por segurança!)
  lastFourDigits: string;
  // A bandeira (Visa, Master, Elo, etc.)
  flag: string;
  // Data de validade
  expirationDate: string;
  // Se o cartão está ativo ou não
  isActive: boolean;
  // Data de criação
  createdAt: Date;
}
