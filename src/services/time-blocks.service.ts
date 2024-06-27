import {axiosWithAuth} from "@/api/interceptors";
import {TimeBlock, TypeTimeBlockFormState, UpdateOrderTimeBlocks} from "@/types";

class TimeBlocksService {
    private BASE_URL = '/user/time-blocks'

    async getTimeBlocks() {
        const response = await axiosWithAuth.get<TimeBlock[]>(this.BASE_URL)
        return response.data
    }

    async createTimeBlock(data: TypeTimeBlockFormState) {
        const response = await axiosWithAuth.post<TimeBlock>(this.BASE_URL, data)
        return response.data
    }

    async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
        const response = await axiosWithAuth.put<TimeBlock>(`${this.BASE_URL}/${id}`, data)
        return response.data
    }

    async updateOrderTimeBlocks(data: UpdateOrderTimeBlocks) {
        const response = await axiosWithAuth.put<TimeBlock[]>(`${this.BASE_URL}/update-order`, data)
        return response.data
    }

    async deleteTimeBlock(id: string) {
        const response = await axiosWithAuth.delete<TimeBlock>(`${this.BASE_URL}/${id}`)
        return response.data
    }
}

export const timeBlocksService = new TimeBlocksService()
