// src/card/entities/card.entity.ts

/**
 * Interface que define a estrutura de um Cartão armazenado no sistema.
 * É o contrato de dados (o 'modelo' do nosso banco de dados simulado).
 */
export interface Card {
  // O ID único (gerado pelo sistema)
  id: number;

  // O nome do titular
  holderName: string;

  // Os últimos 4 dígitos do cartão (armazenamento seguro)
  lastFourDigits: string;

  // A bandeira (Visa, Master, etc.)
  flag: string;

  // Data de validade (formato string, ex: "12/25")
  expirationDate: string;

  // Se o cartão está ativo
  isActive: boolean;

  // Data de criação
  createdAt: Date;
}
