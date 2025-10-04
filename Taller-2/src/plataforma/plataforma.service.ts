// Servicio: contiene la lógica de negocio (reglas, operaciones, acceso a datos)
import { Injectable } from '@nestjs/common';
import { JuegoService } from '../juego/juego.service'; // Importamos el servicio de Juego
import { UpdatePlataformaDto } from './dto/update-plataforma.dto'; //  Importamos el DTO
import { CreatePlataformaDto } from './dto/create-plataforma.dto'

@Injectable()
export class PlataformaService {
  // Datos simulados (en lugar de base de datos)
  private plataformas = [
    { id: 1, nombre: 'Nintendo Switch', fabricante: 'Nintendo' },
    { id: 2, nombre: 'PlayStation 4', fabricante: 'Sony' },
    { id: 3, nombre: 'PC', fabricante: 'Microsoft' },
  ];
    private nextId = 4; // Para asignar IDs únicos a nuevas plataformas
  // Inyectamos JuegoService para poder usar sus métodos
  constructor(private readonly juegoService: JuegoService) {}

  // Método: devuelve todas las plataformas
  findAll() {
    return this.plataformas;
  }

  // Método: devuelve los juegos asociados a una plataforma (usando JuegoService)
  getJuegos(id: number) {
    return this.juegoService.findByPlataforma(id);
  }

// método para crear una nueva plataforma
  create(dto: CreatePlataformaDto) {
    const nueva = { id: this.nextId++, ...dto };
    this.plataformas.push(nueva);
    return nueva;
  }


 //  método update()
  update(id: number, updatePlataformaDto: UpdatePlataformaDto) {
    const plataforma = this.plataformas.find(p => p.id === id);
    if (!plataforma) return { mensaje: 'Plataforma no encontrada' };

    // Actualiza solo los campos enviados en el cuerpo JSON
    if (updatePlataformaDto.nombre !== undefined) {
      plataforma.nombre = updatePlataformaDto.nombre;
    }
    if (updatePlataformaDto.fabricante !== undefined) {
      plataforma.fabricante = updatePlataformaDto.fabricante;
    }

    return {
      mensaje: 'Plataforma actualizada con éxito',
      plataforma,
    };
  }

  // Método: elimina una plataforma por su ID
  remove(id: number) {
    // Busca el índice de la plataforma con ese ID
    const index = this.plataformas.findIndex(p => p.id === id);
    if (index !== -1) {
      // splice() elimina y devuelve el elemento eliminado
      return this.plataformas.splice(index, 1)[0];
    }
    return null; // Si no existe, devuelve null
  }
}
