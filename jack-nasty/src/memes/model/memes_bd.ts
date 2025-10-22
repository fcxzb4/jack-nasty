import { Card } from "./meme_model";

export const mockCards: Card[] = [
  {
    id: 101,
    title: "Caneca Mágica 'Code'",
    description: "Caneca sensível ao calor que revela um padrão de código quando preenchida com bebida quente. Perfeita para desenvolvedores!",
    stock: true,
    price: "R$ 49.90",
    image: "https://placehold.co/600x400/0000FF/FFFFFF?text=Caneca+Code"
  },
  {
    id: 102,
    title: "Headset Gamer Pro-X",
    description: "Áudio 7.1 surround de alta fidelidade e microfone com cancelamento de ruído. Ideal para longas sessões de jogo.",
    stock: true,
    price: "R$ 699.00",
    image: "https://placehold.co/600x400/FF5733/FFFFFF?text=Headset+Gamer"
  },
  {
    id: 103,
    title: "Mousepad XXL RGB",
    description: "Mousepad estendido com iluminação RGB personalizável, superfície otimizada para precisão e base antiderrapante.",
    stock: false,
    price: "R$ 125.50",
    image: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Mousepad+RGB"
  },
  {
    id: 104,
    title: "Webcam Full HD 1080p",
    description: "Webcam para streaming e videoconferências, com foco automático e correção de luz ambiente.",
    stock: true,
    price: "R$ 219.99",
    image: "https://placehold.co/600x400/008080/FFFFFF?text=Webcam+1080p"
  },
  {
    id: 105,
    title: "Teclado Mecânico Compacto",
    description: "Teclado 60% com switches táteis e layout minimalista. Design elegante e durável.",
    stock: false,
    price: "R$ 380.00",
    image: "https://placehold.co/600x400/FFD700/000000?text=Teclado+Mecânico"
  },
  {
    id: 106,
    title: "Cabo USB-C Trançado 3m",
    description: "Cabo de carregamento rápido e sincronização de dados, revestido com nylon trançado de alta resistência.",
    stock: true,
    price: "R$ 35.00",
    image: "https://placehold.co/600x400/A9A9A9/000000?text=Cabo+USB-C"
  }
];

export default mockCards;
