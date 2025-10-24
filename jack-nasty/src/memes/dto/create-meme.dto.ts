import { IsString, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

/**
 * Este é o nosso "molde" para criar um novo Meme.
 * O ValidationPipe vai usar essas regras para checar os dados.
 */
export class CreateMemeDto {  
  // @IsNotEmpty() = Não pode ser vazio
  // @IsString()   = Tem que ser um texto (string)
  @IsNotEmpty()
  @IsString()
  title: string;

  // @IsOptional() = Este campo é opcional, pode vir vazio
  @IsString()
  description: string; // O '?' diz ao TypeScript que este campo é opcional

  // @IsUrl() = Verifica se é uma URL válida (ex: http://...)
  @IsUrl()
  image: string;
}
