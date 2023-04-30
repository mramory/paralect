import axios from "axios";


export const instanse = axios.create({
    baseURL: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
        "x-secret-key": 'GEU4nvd3rej*jeh.eqp',
        "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
    }
})

export const authInstanse = axios.create({
    baseURL: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
        "x-secret-key": 'GEU4nvd3rej*jeh.eqp',
        "x-api-app-id": "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948"
    }
})

const authInterceptor = (config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

authInstanse.interceptors.request.use(authInterceptor)