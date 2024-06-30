import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/ui/typography";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatName } from "@/utils/utils";

export default async function Index() {
  const supabase = createClient();

  const { data: { user }, } = await supabase.auth.getUser();


  return (
    <>
      <main className="flex min-h-screen flex-col">
        
        <section className="flex justify-between items-center mb-4 m-4">
          <div className="flex items-center">
            <Image
              alt="logo fo CAP"
              src="/logo-bg-remove.png"
              width={60}
              height={80}
            />
            <div className="flex flex-col">
              <TypographyH1>CAP</TypographyH1>
              <TypographyP><div className="-mt-8">Clube Airsoft Porto</div></TypographyP>
            </div>
          </div>

          <nav>
            {user?.id ? 
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <Avatar>
                        <AvatarImage src={user.user_metadata.avatar_url} />
                        <AvatarFallback>{formatName(user.user_metadata.full_name)}</AvatarFallback>
                      </Avatar>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <Link href={`/profile/${user.id}`}>Profile</Link>
                      </MenubarItem>
                      <MenubarItem>
                        <Link href="/dashboard">Admin area</Link>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem><Link href="/logout">Logout</Link></MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>  
              :
                <Link href="/login"><Button>Login</Button></Link>
            }
          </nav>
        </section>
        <Separator />

        <section className="m-4">
          <div className="mb-4">
            <TypographyH3>Upcoming Event</TypographyH3>
          </div>
          <Card>
            <div className="m-2">
              <Image
                width={200}
                height={100}
                className="w-full max-h-36 rounded-lg"
                src="/event-card-img.jpg"
                alt="image event"
              />
            </div>
            <CardHeader>
              <CardTitle>Sunday game</CardTitle>
              <CardDescription>26 May 2024 - Maia, Porto, Portugal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full flex justify-between">
                <div className="flex">
                  <p className="mr-2">Contractors: </p>
                  <p>0/<span className="text-xs">100</span></p>
                </div>  
                <div className="flex">
                  <p className="mr-2">Camuflados: </p>
                  <p>0/<span className="text-xs">100</span></p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Link href="/event-detail">
                <Button>View Details</Button>
              </Link>      
            </CardFooter>
          </Card>
        </section>

        <section className="mt-16 m-4">
          <Table>
            <TableCaption>A list of last game events.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Event</TableHead>
                <TableHead>Nº Players</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>100</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>100</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>100</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right"><Badge variant="secondary">Finish</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

      </main>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
            Clube Airsoft Porto{" "}
            <a
                href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
            >
              CAP 
            </a>
        </p>
      </footer>
    </>
  );
}
