import {Base} from "@/types/root.types";

export type Task = Base & {
    email: string
    name: string
    priority?: TaskPriority
    isCompleted: boolean
    userId: string
}
export type Statistic = {
    label: string
    value: number
}

export enum TaskPriority {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export type TypeTaskFormState = Partial<Omit<Task, 'id' | 'updatedAt'>>
