import { object, string,  } from "valibot";

export const DraftUserSchema = object({
    email:string(),
    password:string(),
    });
