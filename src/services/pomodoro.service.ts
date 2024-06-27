import {axiosWithAuth} from "@/api/interceptors";
import {TypeUserFormState, UserResponse, UserUpdateResponse} from "@/types/user.types";
import {
    DeleteSessionResponse,
    PomodoroRound,
    PomodoroSession,
    TypePomodoroRoundState,
    TypePomodoroSessionState, UpdateSessionResponse
} from "@/types";

class PomodoroService {
    private BASE_URL = '/user/timer'

    async getTodaySession() {
        const response = await axiosWithAuth.get<PomodoroSession>(`${this.BASE_URL}/today`)
        return response.data
    }

    async createSession() {
        const response = await axiosWithAuth.post<PomodoroSession>(this.BASE_URL)
        return response.data
    }

    async updateSession(id: string, data: TypePomodoroSessionState) {
        const response = await axiosWithAuth.put<UpdateSessionResponse>(`${this.BASE_URL}/${id}`, data)
        return response.data
    }

    async updateRoundOfTodaySession(id: string, data: TypePomodoroRoundState) {
        const response = await axiosWithAuth.put<PomodoroRound>(`${this.BASE_URL}/round/${id}`, data)
        return response.data
    }

    async deleteSession(id: string) {
        const response = await axiosWithAuth.delete<DeleteSessionResponse>(`${this.BASE_URL}/${id}`)
        return response.data
    }
}

export const pomodoroService = new PomodoroService()
