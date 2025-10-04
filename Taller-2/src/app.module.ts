import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlataformaModule } from './plataforma/plataforma.module'; // ✅ Correcto
import { JuegoModule } from './juego/juego.module';
import { DesarrolladorModule } from './desarrollador/desarrollador.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    PlataformaModule,        // Importa el módulo de plataformas
    JuegoModule,
    DesarrolladorModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
