import { User } from "src/auth/entities/user.entity";



export interface LoginResponse {
    user: User;
    token: string;
}