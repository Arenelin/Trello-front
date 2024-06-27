import {Base} from "@/types/root.types";

export type TimeBlock = Base & {
    name: string
    color?: string,
    duration: number,
    order: number,
    userId: string
}
export type TypeTimeBlockFormState = Partial<Omit<TimeBlock, 'createdAt' | 'updatedAt'>>
export type UpdateOrderTimeBlocks = string[]
