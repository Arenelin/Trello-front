import {Base} from "@/types/root.types";

export type PomodoroRound = Base & {
    totalSeconds: number
    isCompleted?: boolean
    pomodoroSessionId: string
}
export type PomodoroSession = Base & {
    isCompleted?: boolean
    userId: string
    rounds?: PomodoroRound[]
}
export type TypePomodoroRoundState = Partial<Omit<PomodoroRound, 'id' | 'updatedAt' | 'createdAt'>>
export type TypePomodoroSessionState = Partial<Omit<PomodoroSession, 'id' | 'updatedAt' | 'createdAt'>>
