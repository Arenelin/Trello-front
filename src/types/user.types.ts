import {Base} from "@/types/root.types";
import {Statistic, Task} from "@/types/task.types";

export type UserResponse = Base & {
    email: string
    name?: string
    workInterval?: number
    breakInterval?: number
    intervalsCount?: number
    tasks: Task[]
    statistics: Statistic[]
}
export type UserUpdateResponse = {
    name?: string
    email?: string
}
export type TypeUserFormState = Omit<UserResponse, 'id'> & { password?: string }

