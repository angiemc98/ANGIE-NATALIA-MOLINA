import { Injectable } from '@nestjs/common';
import { CreateJuegoDto } from './dtos/create-juego.dto';

@Injectable()
export class JuegoService {

  private juegos = [
    { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura', idPlataforma: 1, idDesarrollador: 1, precio: 59.99 },
    { id: 2, nombre: 'God of War', genero: 'Acción', idPlataforma: 2, idDesarrollador: 2, precio: 49.99 },
    { id: 3, nombre: 'Red Dead Redemption 2', genero: 'Acción/Aventura', idPlataforma: 2, idDesarrollador: 3, precio: 59.99 },
    { id: 4, nombre: 'Minecraft', genero: 'Sandbox', idPlataforma: 3, idDesarrollador: 4, precio: 29.99 },
    { id: 5, nombre: 'The Witcher 3: Wild Hunt', genero: 'RPG', idPlataforma: 2, idDesarrollador: 5, precio: 39.99 },
  ];
  
  private nextId = 6;

  // Obtener todos los juegos
  findAll(precioMax?: number) {
    if (precioMax !== undefined) {
      return this.juegos.filter(juego => juego.precio <= precioMax);
    }
    return this.juegos;
  }

  // Filtrar por plataforma
  findByPlataforma(idPlataforma: number) {
    return this.juegos.filter(juego => juego.idPlataforma === idPlataforma);
  }

  // Filtrar por desarrollador
  findByDesarrollador(idDesarrollador: number) {
    return this.juegos.filter(juego => juego.idDesarrollador === idDesarrollador);
  }

  // Crear un nuevo juego usando el DTO
  create(dto: CreateJuegoDto) {
    const nuevoJuego = {
      id: this.nextId++,
      ...dto, // copia todas las propiedades del DTO
    };
    this.juegos.push(nuevoJuego);
    return nuevoJuego;
  }
}
