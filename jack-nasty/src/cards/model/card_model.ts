export interface Card {
  id: number;
  holderName: string;
  lastFourDigits: string;
  flag: string;
  expirationDate: string;
  isActive: boolean;
  createdAt: Date;
}
