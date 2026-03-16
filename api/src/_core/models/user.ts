import { Role } from "../enums/role.enum";

export class User {
    id: number;
    isAdmin: boolean;
    // ...other properties
    roles: Role[];
}

class Article {
    id: number;
    isPublished: boolean;
    authorId: number;
}