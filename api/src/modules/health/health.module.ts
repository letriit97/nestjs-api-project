import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from 'src/modules/health/health.controller';
import { HealthService } from './health.service';

@Module({
    imports: [
        TerminusModule,
        HttpModule
    ],
    controllers: [HealthController],
    providers: [HealthService],
})
export class HealthModule { }
