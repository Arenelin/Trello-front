import {UserResponse} from "@/types/user.types";

export type AuthForm = {
    email: string
    password: string
}

export type AuthResponse = {
    accessToken: string
    user: UserResponse
}


