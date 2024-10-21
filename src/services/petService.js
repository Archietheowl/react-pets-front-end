import axios from 'axios'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

export const index = async () => {
    return axios.get(BASE_URL)
}