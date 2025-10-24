import { IsString, IsNotEmpty, IsOptional, IsUrl, IsBoolean } from 'class-validator';

/**
 * Este é o nosso "molde" para criar um novo Meme.
 * O ValidationPipe vai usar essas regras para checar os dados.
 */
export class UpdateMemeDto {
  // @IsNotEmpty() = Não pode ser vazio
  // @IsString()   = Tem que ser um texto (string)
  @IsString()
  @IsOptional()
  title: string;

  @IsOptional()
  @IsString()
  price: string;

  @IsOptional()
  @IsString()
  id: number;

  @IsOptional()
  @IsBoolean()
  stock: boolean
  // @IsOptional() = Este campo é opcional, pode vir vazio
  
  @IsOptional()
  @IsString()
  description: string; // O '?' diz ao TypeScript que este campo é opcional

  // @IsUrl() = Verifica se é uma URL válida (ex: http://...)
  
  @IsUrl()
  image: string;
}
