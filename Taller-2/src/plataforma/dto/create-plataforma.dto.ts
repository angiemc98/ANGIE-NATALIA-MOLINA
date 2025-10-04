import { IsString, MinLength } from 'class-validator';

export class CreatePlataformaDto {
  // Nombre de la plataforma: mínimo 3 caracteres
  // Ejemplo: "PlayStation", "Xbox", "Nintendo Switch"
  // Comentario: Se asume que el nombre es un string simple
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  nombre: string;

  // Fabricante de la plataforma: mínimo 3 caracteres
  // Ejemplo: "Sony", "Microsoft", "Nintendo"
  // Comentario: Se asume que el fabricante es un string simple
  @IsString()
  @MinLength(3, { message: 'El fabricante debe tener al menos 3 caracteres.' })
  fabricante: string;
}
