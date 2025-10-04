import { Module } from '@nestjs/common';
import { DesarrolladorController } from './desarrollador.controller';
import { DesarrolladorService } from './desarrollador.service';
import { JuegoModule } from '../juego/juego.module';


@Module({
  controllers: [DesarrolladorController],
  providers: [DesarrolladorService],
  imports: [JuegoModule], // Importamos JuegoModule para poder usar JuegoService
})
export class DesarrolladorModule {}
