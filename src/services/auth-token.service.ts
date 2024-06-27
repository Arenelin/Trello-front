import Cookies from "js-cookie";

enum Tokens {
    ACCESS_TOKEN = 'Access-token',
    REFRESH_TOKEN = 'Refresh-token'
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(Tokens.ACCESS_TOKEN)
    return accessToken || null
}
export const saveTokenCookieStorage = (accessToken: string) => {
    Cookies.set(Tokens.ACCESS_TOKEN, accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1
    })
}

export const removeFromCookieStorage = () => {
    Cookies.remove(Tokens.ACCESS_TOKEN)
}
