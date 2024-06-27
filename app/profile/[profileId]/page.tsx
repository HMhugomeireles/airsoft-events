import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { TypographyH4 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/repositories/user";

export default async function Profile({
  params,
  searchParams,
}: {
  params: { profileId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  //const { profile } = await getUserDetails(params.profileId);
  console.log(searchParams, params.profileId)

  return (
    <div className="flex min-h-screen flex-col my-4">
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

      <section className="grid h-screen place-items-center">
        <div className="flex flex-col max-w-96">
           {/* <Image 
              alt="player profile image"
              src={}
              width={40}
              height={80}
           /> */}
        </div>
      </section>
    </div>
  );
}
