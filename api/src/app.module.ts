import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler/dist/throttler.module';
import { RolesGuard } from './_core/guards/roles.guard';

import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HealthModule } from './modules/health/health.module';



@Module({
  imports: [
    // Rate Limiting: Giới hạn request 10 trong 60p
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    AuthenticationModule,
    HealthModule,
  ],
  controllers: [
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule { }
