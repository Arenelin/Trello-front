import axios, {CreateAxiosDefaults} from "axios";
import {getAccessToken, removeFromCookieStorage} from "@/services/auth-token.service";
import {errorCatch} from "@/api/error";
import {authService} from "@/services/auth.service";

const options: CreateAxiosDefaults = {
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

const axiosClassic = axios.create(options) // for unauthorized requests
const axiosWithAuth = axios.create(options) // for authorized requests

axiosWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

axiosWithAuth.interceptors.response.use(config => {
    return config
}, async (error) => {
    const originalRequest = error.config
    // Сервер ответил, что мы не авторизованы||
    // Ошибка, что истек токен ||
    // Ошибка, что мы забыли прокинуть токен &&
    // Запрос вообще выполнялся &&
    // Запрос не повторялся, он выполнился однократно, чтобы не было цикла повторяемого запроса
    if ((error?.response?.status === 401
            || errorCatch(error) === 'jwt expired'
            || errorCatch(error) === 'jwt must be provided'
        )
        && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true // Один раз провели запрос, и больше его повторять не нужно
        try {
            await authService.getNewTokens()
            return axiosWithAuth.request(originalRequest)
        } catch (e) {
            if (errorCatch(e) === 'jwt-expired') { // Если даже после повторного запроса, бэк вернул ответ, что токен
                // истек, это говорит о том, что даже refresh токен истек, и пользователя нужно вылогинить
                removeFromCookieStorage()
            }
        }
    }
})

export {axiosClassic, axiosWithAuth}
