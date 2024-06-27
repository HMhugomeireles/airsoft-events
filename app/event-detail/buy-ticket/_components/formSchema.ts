import { z } from "zod";

export const formSchema = z.object({
    defaultPlayer: z.object({
        name: z.string(),
        apdName: z.string(),
        apdNumber: z.string(),
        ticketType: z.enum(['partnerTicket', 'normalTicket']).default("normalTicket")
    }),
    extraPlayers: z.array(z.object({
        name: z.string(),
        apdName: z.string(),
        apdNumber: z.string(),
        ticketType: z.enum(['partnerTicket', 'normalTicket']).default("normalTicket")
    })).default([])
})
