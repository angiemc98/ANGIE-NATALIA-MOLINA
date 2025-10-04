// Importamos decoradores para validar los datos de entrada
import { IsInt, Length, Min, IsString,IsNumber } from "class-validator";

// DTO: Define cómo debe verse la información al CREAR un juego
export class CreateJuegoDto {

    // Nombre del juego: texto de 3 a 50 caracteres
    //
    @IsString()
    @Length(3, 50)
    nombre: string;

    // Género del juego: texto (ej: "Acción", "RPG")
    // Cadena simple, sin validaciones complejas
    @IsString()
    genero: string;

    // ID de la plataforma (relación con entidad Plataforma)
    // Debe ser un número entero
    @IsInt()
    idPlataforma: number;

    // ID del desarrollador (relación con entidad Desarrollador)
    // También debe ser un número entero
    @IsInt()
    idDesarrollador: number;

    // Precio del juego: número no negativo
    // Si usamos decimales (59.99), mejor usar @IsNumber() en vez de @IsInt()
    // revisar que decidimos 
    @IsNumber()
    @Min(0)
    precio: number;

    // Fecha de lanzamiento: cadena en formato ISO (ej: "2023-05-12")
    @IsString()
    fechaLanzamiento: string;
}