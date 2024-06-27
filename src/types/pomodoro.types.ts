import {Base} from "@/types/root.types";

export type PomodoroSession = Base & {
    isCompleted?: boolean
    userId: string
    rounds?: PomodoroRound[]
}

export type PomodoroRound = Base & {
    totalSeconds: number
    isCompleted?: boolean
    pomodoroSessionId: string
}

export type UpdateSessionResponse = Omit<PomodoroSession, 'rounds'>
export type DeleteSessionResponse = Omit<PomodoroSession, 'rounds'>
export type TypePomodoroRoundState = Partial<Omit<PomodoroRound, 'id' | 'updatedAt' | 'createdAt'>>
export type TypePomodoroSessionState = Partial<Omit<PomodoroSession, 'id' | 'updatedAt' | 'createdAt'>>
