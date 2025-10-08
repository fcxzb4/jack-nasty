// src/card/dto/create-card.dto.ts
// Você precisará instalar o 'class-validator' e 'class-transformer'
// para fazer a validação de forma completa, mas vamos focar na estrutura por enquanto.
export class CreateCardDto {
  // Campos obrigatórios para criar um cartão
  // Nome do titular (Ex: João da Silva)
  holderName: string;
  // Número do cartão (Será validado e processado no Service)
  cardNumber: string;
  // Código de segurança (CVV - será validado e nunca armazenado)
  cvv: string;
  // Data de validade (Ex: 12/25)
  expirationDate: string;
}
