import {axiosWithAuth} from "@/api/interceptors";
import {TypeUserFormState, UserResponse, UserUpdateResponse} from "@/types/user.types";

class UserService {
    private BASE_URL = '/user/profile'

    async getUserProfile() {
        const response = await axiosWithAuth.get<UserResponse>(this.BASE_URL)
        return response.data
    }
    async updateUserProfile(data: TypeUserFormState) {
        const response = await axiosWithAuth.put<UserUpdateResponse>(this.BASE_URL, data)
        return response.data
    }
}

export const userService = new UserService()
