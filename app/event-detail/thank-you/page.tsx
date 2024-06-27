import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col m-4">
      <div className="mt-4">
        <Image
          width={200}
          height={100}
          className="w-full max-h-36 rounded border bottom-8 border-primary"
          src="/event-card-img.jpg"
          alt="image event"
        />
      </div>
      <section className="mt-4 text-center">
        <TypographyH3>Sunday game</TypographyH3>
        <TypographyP>Thanks your register is complete!</TypographyP>
        <div>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </section>

    </main>
  )
}