"use client"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, FontBoldIcon, FontItalicIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { TypographyH2, TypographyH3, TypographyLead } from "@/components/ui/typography"
import { Card } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRef } from "react"
import { Separator } from "@/components/ui/separator"
import { CircleX, Plus, UsersRound } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { TeamItems } from "./team-items"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
  eventName: z.string(),
  locationId: z.string(),
  duration: z.number(),
  openDoors: z.string(),
  startGame: z.string(),
  eventDate: z.date({
    required_error: "A date of event is required.",
  }),
  teams: z.array(z.object({
    teamName: z.string(),
    teamItems: z.array(z.string()),
    maxTeamPlayers: z.number()
  })).default([
    {
      maxTeamPlayers: 99,
      teamItems: ['calças camufladas', 'camisola camufladas', 'Ghillie suits'],
      teamName: 'Camuflados'
    },
    {
      maxTeamPlayers: 99,
      teamItems: ['calças lisas', 'camisola lisas'],
      teamName: 'Contractors'
    },
  ]),
  teamsPlayersGap: z.number(),
  gameGoals: z.string(),
  gameExtraInformation: z.string(),
  rules: z.array(z.string()).default([
    'Todas as armas tem que estar confrome a lei 1.3j.',
    'O jogador que fore controlado com réplicas acima do limete, já não pode jogar no evento.',
    'Morto não fala.',
    'Quando se é atingido ou levanta a mão ou diz morto.',
    'Não vale tiro sego, disparar sem expor a cara não é permitido.',
    'Fogo amigo conta como morto, fica morto quem atirou no amigo.',
    'Não é permitido usar qualquer granada de som.',
    'É permitido usar granadas de fumo.',
    'Granada só mata se contiver bbs e as mesmas atingirem o jogadores.',
    'Granada atirada só pode ser apanhada quando a jogado de quem atirou terminar.',
    'Pede se aos jogadores que não apanhem as granadas do chão ou as mudem de sítio porque quem as mandou sabe para onde lançou e é la que vai procurar.',
    'Pede se especial atenção à zona de jogo virada para a rua, pede se bom senso aos jogadores para evitarem disparos para jogadores que se encontrem perto do muro de forma a evitar disparos acidentais para a rua e carros que se encontrem la estacionados.'
  ]),
  isAresAlphaGame: z.boolean().default(false),
  qrCodes: z.array(z.string())
})

export function NewEvent() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      eventName: '',
      locationId: '',
      duration: 4,
      eventDate: new Date(),
      teams: [
        {
          maxTeamPlayers: 99,
          teamItems: ['calças camufladas', 'camisola camufladas', 'Ghillie suits'],
          teamName: 'Camuflados'
        },
        {
          maxTeamPlayers: 99,
          teamItems: ['calças lisas', 'camisola lisas'],
          teamName: 'Contractors'
        },
      ],
      teamsPlayersGap: 7,
      gameGoals: '',
      gameExtraInformation: '',
      rules: [
        'Todas as armas tem que estar confrome a lei 1.3j.',
        'O jogador que fore controlado com réplicas acima do limete, já não pode jogar no evento.',
        'Morto não fala.',
        'Quando se é atingido ou levanta a mão ou diz morto.',
        'Não vale tiro sego, disparar sem expor a cara não é permitido.',
        'Fogo amigo conta como morto, fica morto quem atirou no amigo.',
        'Não é permitido usar qualquer granada de som.',
        'É permitido usar granadas de fumo.',
        'Granada só mata se contiver bbs e as mesmas atingirem o jogadores.',
        'Granada atirada só pode ser apanhada quando a jogado de quem atirou terminar.',
        'Pede se aos jogadores que não apanhem as granadas do chão ou as mudem de sítio porque quem as mandou sabe para onde lançou e é la que vai procurar.',
        'Pede se especial atenção à zona de jogo virada para a rua, pede se bom senso aos jogadores para evitarem disparos para jogadores que se encontrem perto do muro de forma a evitar disparos acidentais para a rua e carros que se encontrem la estacionados.'
      ],
      isAresAlphaGame: false,
      qrCodes: []
    }
  })
  const { control, register, handleSubmit, setValue } = form;
  const teamsField = useFieldArray({
    name: 'teams',
    control
  });

  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  return (
    <Card className="p-4">
      <div className="mb-2">
        <TypographyH2>Create new event</TypographyH2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="eventName"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Event name</FormLabel>
                <FormControl>
                  <Input placeholder="Insert event name" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locationId"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <div className="grid flex-1 gap-2">
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      defaultValue={field.value}
                      {...field}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="32134234-asds3-4a">Avecar CQB City - Maia </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button >New location</Button>
                  </div>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input placeholder="Insert duration" {...field} />
                </FormControl>
                <FormDescription>Total event duration in hours 1, 4, 12, 24</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="openDoors"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Open doors</FormLabel>
                <FormControl>
                  <Input placeholder="Insert duration" {...field} />
                </FormControl>
                <FormDescription>Example 8:00</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startGame"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Start game</FormLabel>
                <FormControl>
                  <Input placeholder="Insert duration" {...field} />
                </FormControl>
                <FormDescription>Example 8:00</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isAresAlphaGame"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Is Ares alpha game?</FormLabel>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of event</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Date for you want make the event
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <section>
            <TypographyH3>Teams</TypographyH3>
            <Separator />
            <div className="mt-4">
              {teamsField.fields.map((field, index) => (
                <div key={index} className="mb-4">
                  <div className="mb-4">
                    <TypographyLead>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <UsersRound /> Team {index + 1}
                        </div>
                        <div>
                          {index > 1 && (
                            <CircleX className="text-red-500 cursor-pointer" onClick={() => teamsField.remove(index)} />
                          )}
                        </div>
                      </div>
                    </TypographyLead>
                  </div>
                  <FormField
                    control={form.control}
                    name={`teams.${index}.teamName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team name</FormLabel>
                        <FormControl>
                          <Input placeholder="Insert team name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`teams.${index}.maxTeamPlayers`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Max team players</FormLabel>
                        <FormControl>
                          <Input placeholder="Insert max players" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <TeamItems
                    key={`teams-items-${index}`} 
                    control={control}
                    indexItem={index}
                    form={form}
                  />
                </div>
              ))}
            </div>
            <Separator />

            <div className="grid flex-1 gap-2 my-4">
              <Button onClick={() => teamsField.append({ maxTeamPlayers: 99, teamItems: [], teamName: ''})}><Plus /> Add more teams</Button>
            </div>

          </section>

          <Separator />

          <section >
            <FormField
              control={form.control}
              name="gameGoals"
              render={({ field }) => (
                <FormItem className="flex flex-col mb-4">
                  <FormLabel>Game goals</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Insert game goals"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gameExtraInformation"
              render={({ field }) => (
                <FormItem className="flex flex-col mb-4">
                  <FormLabel>Team gap players</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Insert number of gap"
                      className="resize-none max-h-26"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This field will control the balance of the teams.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {}
            
            <FormField
              control={form.control}
              name="isAresAlphaGame"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Ares alpha game</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </section>


          <div className="flex justify-end">
            <Button type="submit">Create event</Button>
          </div>
        </form>
      </Form>

    </Card>
  )
}