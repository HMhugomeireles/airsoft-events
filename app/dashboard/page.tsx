import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { TypographyH4 } from "@/components/ui/typography";
import Link from "next/link";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
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
                <Link href="/dashboard/create-event">
                    <Card className="w-40">
                        <CardHeader>
                            <CardTitle>Create Event</CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            </section>

        </main>
        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
            <p>
                Powered by{" "}
                <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                >
                    Supabase
                </a>
            </p>
        </footer>
    </>
  );
}
