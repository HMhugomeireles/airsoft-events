import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { EventRegisterForm } from "./_components/event-register-form";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col m-4">

      <section className="my-4">
        <Breadcrumb>
          <BreadcrumbList>
              <BreadcrumbItem>
                Inscrição
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                  <BreadcrumbLink href="/event-detail">Event Detail</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                  <BreadcrumbPage>Buy Tickets</BreadcrumbPage>
              </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <Separator />

      <section className="my-4">
        <TypographyH3 >Sunday game</TypographyH3>
        <p>26 May 2024 - Maia, Porto, Portugal</p>
      </section>

      <Separator />
        
      <section className="my-4">
        <EventRegisterForm />
      </section>
    </main>
  );
}