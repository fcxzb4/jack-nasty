// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // 1. Lógica para a Rota Raiz (/)
  getHello(): string {
    return 'Hello World!';
  }

  // 2. Lógica para a Rota Status (/status)
  getServerStatus(): string {
    // Aqui estaria a lógica real: checar DBs, APIs, etc.
    return 'Servidor rodando e saudável!';
  }

  // 3. Lógica para a Rota Dinâmica (/:nome)
  // Recebe o parâmetro do Controller e processa a resposta.
  getGreeting(nomeUsuario: string): string {
    // A lógica de formar a frase agora está no Service.
    return `Olá, ${nomeUsuario}! Seja bem-vindo ao nosso sistema.`;
  }
}
