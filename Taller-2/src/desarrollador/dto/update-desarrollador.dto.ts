// DTO Objeto que  define como  se ve una actualización parcial
// se usa en el cuerpo de las  petciones PUT
import { IsString, IsOptional, IsDateString } from 'class-validator';

// DTO para actualización parcial del Desarrollador
export class UpdateDesarrolladorDto {
  // Todas las propiedades son opcionales para permitir actualizaciones parciales
  // Si se proporcionan, deben cumplir con las validaciones
  @IsString()
  @IsOptional()
  nombre?: string;
  
  // País del desarrollador
  // Si se proporciona, debe ser una cadena, cumpliendo con las validaciones
  @IsString()
  @IsOptional()
  pais?: string;

  // Fecha de fundación del desarrollador
  // Si se proporciona, debe ser una cadena en formato de fecha ISO
  // Ejemplo: "2020-01-15"
  @IsDateString()
  @IsOptional()
  fundacion?: string; // formato: "YYYY-MM-DD"
}
