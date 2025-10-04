import { Module } from '@nestjs/common';
import { JuegoController } from './juego.controller';
import { JuegoService } from './juego.service';

@Module({
  controllers: [JuegoController],
  providers: [JuegoService],
  exports: [JuegoService], // Exportamos JuegoService para que otros módulos lo puedan usar
})
export class JuegoModule {}
