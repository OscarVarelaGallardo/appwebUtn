import { DraftUserSchema } from "../types"
import { safeParse } from "valibot"

import axios from "axios"
type UserData = {
    [k: string]: FormDataEntryValue;

}

export async function loginService(data: UserData): Promise<boolean> {
    try {
        const result = safeParse(DraftUserSchema, {
            email: data.email,
            password: data.password
        })
        if (result.success) {
            const url = `${import.meta.env.VITE_API_URL}/user/login `
          const response =  await axios.post(url, {
                correo_electronico: data.email,
                contrasena: data.password
            })
       
            return response.data
        } else {
            throw new Error('Datos invalidos')

        }
    } catch (error) {
        console.log(error)
        return false
    }
}

