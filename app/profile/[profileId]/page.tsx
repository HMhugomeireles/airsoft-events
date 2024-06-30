import Image from "next/image";
import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/repositories/user";
import { authGuard } from "@/utils/supabase/authGuard";

export default async function Profile({
  params,
  searchParams,
}: {
  params: { profileId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  await authGuard()
  const profile = await getUserDetails(params.profileId);
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

      <section className="flex flex-col">
        <div className="flex items-center justify-evenly mt-16">
           <Image 
              alt="player profile image"
              src={profile.avatar}
              width={120}
              height={120}
              className="rounded-full border-white border-2"
           />
           <div className="mt-4">
            <h1 className="text-4xl font-bold">{profile.nick}</h1>
            <h3 className="text-xl">{profile.firstName} {profile.lastName}</h3>
            <p>{profile.birthDay}</p>
          </div>
        </div>
        
        <div>
          <TypographyP>{profile.country}</TypographyP>
          <TypographyP>{profile.state}</TypographyP>
        </div>
        <div>
          <TypographyP>{profile.apd}</TypographyP>
          <TypographyP>{profile.apdNumber}</TypographyP>
          <TypographyP>{profile.apdExpiresAt}</TypographyP>
        </div>
      </section>

      
    </div>
  );
}
