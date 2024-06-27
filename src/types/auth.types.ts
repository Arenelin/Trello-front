import {Statistic, Task} from "@/types/task.types";
import {Base} from "@/types/root.types";

export type AuthForm = {
    email: string
    password: string
}

export type AuthResponse = {
    accessToken: string
    user: User
}


export type User = Base & {
    email: string
    name?: string
    workInterval?: number
    breakInterval?: number
    intervalsCount?: number
    tasks: Task[]
    statistics: Statistic[]
}
