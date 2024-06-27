import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TypographyH4 } from "@/components/ui/typography";
import Image from "next/image";
import { DefaultEvent } from "./_components/default-event";
import { NewEvent } from "./_components/new-event/new-event";

export default function Dashboard() {
    return(
        <main className="flex min-h-screen flex-col my-4">
            <section className="flex justify-center items-center mb-4">
                <Image
                alt="logo fo CAP"
                src="/logo-bg-remove.png"
                width={40}
                height={80}
                />
                <TypographyH4>Clube Airsoft Porto</TypographyH4>
            </section>

            <Separator />

            <section className="p-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Create event</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                    </Breadcrumb>
            </section>

            <section className="p-4">
                <Tabs defaultValue="default-event" className="w-full">
                    <TabsList>
                        <TabsTrigger value="default-event">Default Event</TabsTrigger>
                        <TabsTrigger value="new-event">New Event</TabsTrigger>
                    </TabsList>
                    <TabsContent value="default-event">
                        <DefaultEvent />
                    </TabsContent>
                    <TabsContent value="new-event">
                        <NewEvent />
                    </TabsContent>
                </Tabs>
            </section>

        </main>
    )
}