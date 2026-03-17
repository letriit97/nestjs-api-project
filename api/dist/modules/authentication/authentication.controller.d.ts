import { User } from 'src/_core/models/user';
export declare class AuthenticationController {
    create(userDto: User): void;
    uploadFile(file: Express.Multer.File): void;
}
