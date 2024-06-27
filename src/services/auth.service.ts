import {AuthForm, AuthResponse} from "@/types";
import {axiosClassic, axiosWithAuth} from "@/api/interceptors";
import {removeFromCookieStorage, saveTokenCookieStorage} from "@/services/auth-token.service";

class AuthService {
    private BASE_URL = 'auth'

    async main(type: 'register' | 'login', data: AuthForm) {
        const response = await axiosClassic.post<AuthResponse>(`/${this.BASE_URL}/${type}`, data)
        if (response.data.accessToken) {
            saveTokenCookieStorage(response.data.accessToken)
        }
        return response
    }

    async getNewTokens() {
        const response = await axiosClassic.post<AuthResponse>(`/${this.BASE_URL}/login/access-token`)
        if (response.data.accessToken) {
            saveTokenCookieStorage(response.data.accessToken)
        }
        return response
    }

    async logout() {
        const response = await axiosClassic.post<boolean>(`/${this.BASE_URL}/logout`)
        if (response.data) {
            removeFromCookieStorage()
        }
    }
}

export const authService = new AuthService()
