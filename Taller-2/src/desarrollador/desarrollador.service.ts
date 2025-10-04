import { Injectable } from '@nestjs/common';
import { UpdateDesarrolladorDto } from './dto/update-desarrollador.dto';
import { JuegoService } from '../juego/juego.service';

@Injectable()
export class DesarrolladorService {
  private desarrolladores = [
    { id: 1, nombre: 'Nintendo EPD', pais: 'Japón', fundacion: '1984-01-01' },
    { id: 2, nombre: 'Santa Monica Studio', pais: 'EE.UU.', fundacion: '1999-01-01' },
    { id: 3, nombre: 'Rockstar Games', pais: 'EE.UU.', fundacion: '1998-01-01' },
    { id: 4, nombre: 'Mojang Studios', pais: 'Suecia', fundacion: '2009-01-01' },
    { id: 5, nombre: 'CD Projekt Red', pais: 'Polonia', fundacion: '2002-01-01' },
  ];

  constructor(private readonly juegoService: JuegoService) {}

  findAll() {
    return this.desarrolladores;
  }

  // consulta juegos desde JuegoService
  getJuegos(id: number) {
    return this.juegoService.findByDesarrollador(id);
  }

  update(id: number, updateDesarrolladorDto: UpdateDesarrolladorDto) {
    const index = this.desarrolladores.findIndex(d => d.id === id);
    if (index !== -1) {
      this.desarrolladores[index] = { ...this.desarrolladores[index], ...updateDesarrolladorDto };
      return this.desarrolladores[index];
    }
    return null;
  }

  updatePais(id: number, pais: string) {
    const dev = this.desarrolladores.find(d => d.id === id);
    if (dev) {
      dev.pais = pais;
      return dev;
    }
    return null;
  }
}
