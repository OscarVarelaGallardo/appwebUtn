import axios from 'axios'


export async function getUserData() {
    try {
        const url = `${import.meta.env.VITE_API_URL}/user/getusers`
        const response = await axios.get(url)

        return response.data
    } catch (error) {
        console.log(error)
        throw error;
    }

}
