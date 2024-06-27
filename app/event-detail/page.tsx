import Image from "next/image";
import { Button } from '@/components/ui/button'
import { TypographyBlockquote, TypographyH1, TypographyH3, TypographyH4, TypographyP, TypographySmall } from "@/components/ui/typography";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BadgeEuro, Building2, CircleOff, MapPin, Timer } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-4">
        <section>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>
        <div className="mt-4">
            <Image
                width={200}
                height={100}
                className="w-full max-h-36 rounded border bottom-8 border-primary"
                src="/event-card-img.jpg"
                alt="image event"
            />
        </div>
        <section className="mt-4">
            <TypographyH3>Sunday game</TypographyH3>
            <TypographyP>2 teams 2 Goals</TypographyP>
        </section>

        <section className="text-sm mt-8">
            <TypographyH4>Informações</TypographyH4>
            <Separator className="my-2"/>
            <div className="flex justify-between my-2">
                <div className="flex items-center"><Building2 className="mr-2 w-4 h-4" /> Organizadores:</div>
                <div className="font-bold">Andre Madeira</div>
            </div>
            <div className="flex justify-between my-1">
                <div className="flex items-center"><MapPin className="mr-2 w-4 h-4" /> Morada:</div>
                <div>Cordenadas: <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/41%C2%B014'25.0%22N+8%C2%B035'39.7%22W/@41.240282,-8.5969479,1076m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d41.240282!4d-8.594373?entry=ttu"><Button variant={"link"}>{`41°14'25.0"N 8°35'39.7"W`}</Button></a></div>
            </div>
            <div className="flex justify-between my-1">
                <div className="flex items-center"><Timer className="mr-2 w-4 h-4" /> Tempo de jogo: 4h</div>
                <div>Portas abrem as 8:30</div>
            </div>
        </section>

        <section className="mt-8">
            <TypographyH4>Regras</TypographyH4>
            <Separator className="my-2"/>

            <TypographyBlockquote>Controlo de fps durante o jogo, <strong>1,3j conforme a lei</strong>, o jogador que for controlado acima deste limite será convidado a sair do jogo e proibido de jogar nos nossos eventos.
                O jogador que for controlado com a réplica acima do limite, já não pode participar no evento. Por isso verifiquem o equipamento antes do jogo.
            </TypographyBlockquote>

            <div className="mt-4">
                <TypographySmall>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> MORTOS NÃO FALAM</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> QUANDO SE É ATINGIDO “GRITEM” MORTO</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> NÃO VALE TIRO CEGO</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> FOGO AMIGO CONTA COMO MORTO</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> Não vale rajadas dentro dos edifícios, nem de dentro para fora e de fora para dentro</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> Não vale granadas sonoras, a utilização de outro tipo de granadas só mata se contiverem bbs e as mesmas atingirem os jogadores. Quem lança a granada só pode apanhar a granada no final da jogada, dando tempo aos elementos que estão no outro compartimento acabarem de fazer a sua jogada. Pede se aos jogadores que não apanhem as granadas do chão ou as mudem de sítio porque quem as mandou sabe para onde lançou e é la que vai procurar.</p>
                    <p className="flex"><CircleOff className="mr-2 w-4 h-4 text-red-600" /> Pede se especial atenção à zona de jogo virada para a rua, pede se bom senso aos jogadores para evitarem disparos para jogadores que se encontrem perto do muro de forma a evitar disparos acidentais para a rua e carros que se encontrem la estacionados.</p>
                </TypographySmall>
            </div>
        </section>

        <section>
            <p> 🔄 RESPAWN DE 4 EM 4 JOGADORES</p>
            <p>📞 Canais rádio
                Contractors 1 a 4
                Camuflados 5 a 8
            </p>
        </section>

        <section className="mt-8">
            <TypographyH4>Detalhes</TypographyH4>
            <Separator className="my-2"/>

            <div className="flex justify-between my-1">
                <div>Não sócio</div>
                <div className="flex items-center"><BadgeEuro className="mr-2 w-4 h-4 text-green-600" /> 4€</div>
            </div>
            <div className="flex justify-between my-1">
                <div>Sócio</div>
                <div className="flex items-center"><BadgeEuro className="mr-2 w-4 h-4 text-green-600" /> 3€</div>
            </div>

            <div className="flex justify-end ">
                <Link href={'/event-detail/buy-ticket'}>
                    <Button>Inscrição</Button>
                </Link>
            </div>

            <div>
            Briefing dado no dia do evento a cada facção.
            </div>
        </section>
            
      

    </main>
  );
}