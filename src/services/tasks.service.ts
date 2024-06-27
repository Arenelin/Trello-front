import {axiosWithAuth} from "@/api/interceptors";
import {TypeUserFormState, UserResponse, UserUpdateResponse} from "@/types/user.types";
import {Task, TimeBlock, TypeTaskFormState, TypeTimeBlockFormState, UpdateOrderTimeBlocks} from "@/types";

class TasksService {
    private BASE_URL = '/user/tasks'

    async getTasks() {
        const response = await axiosWithAuth.get<Task[]>(this.BASE_URL)
        return response.data
    }

    async createTask(data: TypeTaskFormState) {
        const response = await axiosWithAuth.post<Task>(this.BASE_URL, data)
        return response.data
    }

    async updateTask(id: string, data: TypeTaskFormState) {
        const response = await axiosWithAuth.put<Task>(`${this.BASE_URL}/${id}`, data)
        return response.data
    }

    async deleteTask(id: string) {
        const response = await axiosWithAuth.delete<Task>(`${this.BASE_URL}/${id}`)
        return response.data
    }
}

export const tasksService = new TasksService()
