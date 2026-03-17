import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Roles } from 'src/_core/decorator/roles.decorator';
import { Role } from 'src/_core/enums/role.enum';
import { User } from 'src/_core/models/user';
import { FileSizeValidationPipe } from 'src/_core/pipes/file-size-validation/file-size-validation.pipe';

@Controller('authentication')
export class AuthenticationController {

    @ApiBearerAuth()
    @Post()
    @Roles(Role.Admin)
    create(@Body() userDto: User) {

        // this.catsService.create(createCatDto);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(  @UploadedFile(new FileSizeValidationPipe()  ) file: Express.Multer.File): void {
        console.log(file);
    }
}
