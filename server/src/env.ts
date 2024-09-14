//Garante que a url existe nas envs evitando erro

import z from 'zod';

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)