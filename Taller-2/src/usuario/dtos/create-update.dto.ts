import { ArrayNotEmpty, IsArray, IsInt, IsString, Length, Min} from "class-validator";


export class UsuarioDto {
    // Nombre del usuario: mínimo 3 caracteres
    // Ejemplo: "Juan", "María"
    // Comentario: Se asume que el nombre es un string simple
    @IsString()
    @Length(3, 50)
    nombre: string;

    // Edad del usuario: número no negativo
    // Ejemplo: 25, 30
    // Comentario: Se asume que la edad es un entero no negativo
    @IsInt()
    @Min(0)
    edad: number;

    // Email del usuario: debe ser una cadena válida
   // Ejemplo: "juan@example.com"
    @IsString()
    email: string;
}

export class DeleteManyDto {
    // Array de IDs a eliminar
    // Ejemplo: [1, 2, 3]
    // Comentario: Se asume que los IDs son números enteros
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    ids: number[];
}