// Este archivo define el módulo de Plataforma.
// Un módulo en NestJS agrupa controladores, servicios y otros módulos relacionados.
// Este archivo define el módulo PlataformaModule
import { Module } from '@nestjs/common';
import { PlataformaController } from './plataforma.controller';
import { PlataformaService } from './plataforma.service';
import { JuegoModule } from '../juego/juego.module'; // Importamos JuegoModule para usar JuegoService

@Module({
  controllers: [PlataformaController],
  providers: [PlataformaService],
  imports: [JuegoModule], // Necesario para inyectar JuegoService
})
export class PlataformaModule {}

