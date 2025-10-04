import {
  Controller,
  Post,
  Body,
  Query,
  Patch,
  Param,
  ValidationPipe,
  Get,
  ParseFloatPipe,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { JuegoService } from './juego.service';
import { CreateJuegoDto } from './dtos/create-juego.dto';

@Controller('juego')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

  // ─── POST ───────────────────────────────────────────────
  // Crea un nuevo juego usando el DTO con validación automática
  // http://localhost:3000/juego
  // El cuerpo debe ser un JSON con todas las propiedades
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createGame(@Body() data: CreateJuegoDto) {
    const nuevoJuego = this.juegoService.create(data);
    return {
      message: 'Juego creado con éxito',
      data: nuevoJuego,
    };
  }

  // Crea múltiples juegos (opcional)
  // http://localhost:3000/juego/some
  // El cuerpo es un array de objetos JSON
  @Post('some')
  createSome(@Body() data: any[]) {
    return { message: 'Varios juegos creados', data };
  }

  // ─── PATCH ───────────────────────────────────────────────
  // Actualiza solo el nombre
  // http://localhost:3000/juego/update-name
  // El cuerpo debe ser un JSON con id y nombre
  @Patch('update-name')
  updateName(@Body() body: { id: number; nombre: string }) {
    return { message: 'Nombre de juego actualizado', data: body };
  }

  // Actualiza por ID usando Query params
  // http://localhost:3000/juego/1?precio=59.99&genero=Aventura -> si id=1. Posteriormente se pueden actualizar los datos de precio y género insertados en la URL
  // El id es un parámetro de ruta, precio y género son query params opcionales
  @Patch(':id')
  updateJuego(
    @Param('id', ParseIntPipe) id: number,
    @Query('precio', ParseFloatPipe) precio?: number,
    @Query('genero') genero?: string,
  ) {
    return { message: 'Juego actualizado', id, cambios: { precio, genero } };
  }

  // ─── GET ───────────────────────────────────────────────
  // Buscar juegos por nombre
  // http://localhost:3000/juego/search?nombre=Zelda
  // El nombre es un query param obligatorio
  @Get('search')
  searchGames(@Query('nombre') nombre: string) {
    return { message: 'Búsqueda de juegos', nombre };
  }

  // Listar todos los juegos por precio máximo
  // http://localhost:3000/juego o /juego?precioMax=50
  // El query param precioMax
  @Get()
  findAll(@Query('precioMax', ParseFloatPipe) precioMax?: number) {
    return {
      message: 'Lista de juegos',
      data: this.juegoService.findAll(precioMax),
    };
  }
}
