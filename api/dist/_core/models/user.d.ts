import { Role } from "../enums/role.enum";
export declare class User {
    id: number;
    isAdmin: boolean;
    roles: Role[];
}
export declare class Article {
    id: number;
    isPublished: boolean;
    authorId: number;
}
