import Image from "next/image";
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "@/components/ui/typography";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/repositories/user";
import { authGuard } from "@/utils/supabase/authGuard";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

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

      <section className="ml-8 mt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="flex flex-col">

        <div className="flex items-center justify-evenly">
          <Card className="max-w-96 my-6">
            <CardContent className="flex items-center justify-evenly p-8">
              <Image
                alt="player profile image"
                src={profile.avatar}
                width={120}
                height={120}
                className="rounded-full border-white border-2 mr-4"
              />
              <div className="mt-4">
                <h2 className="text-4xl font-bold">{profile.nick}</h2>
                <h3 className="text-xl text-slate-500">{profile.firstName} {profile.lastName}</h3>
                <p className="text-sm text-slate-500">{profile.birthDay}</p>
              </div>
            </CardContent>
          </Card>
        </div>


      </section>

      <section className="mx-8 mt-4">
        <TypographyH2>Location</TypographyH2>
        <div className="flex justify-between items-center mt-2">
          <Label>Country</Label>
          <p>{profile.country}<span className="ml-2">🇵🇹</span></p>
        </div>
        <div className="flex justify-between items-center mt-2 mb-6">
          <Label>State/Cidade</Label>
          <p>{profile.state}</p>
        </div>

        <TypographyH2>Airsoft APD</TypographyH2>
        <div className="flex justify-between items-center mt-2">
          <Label>APD</Label>
          <p>{profile.apd}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Label>APD number</Label>
          <p>{profile.apdNumber}</p>
        </div>
        <div className="flex justify-between items-center mt-2 mb-6">
          <Label>APD expires at</Label>
          <p>{profile.apdExpiresAt}</p>
        </div>

        <TypographyH2>Guns</TypographyH2>
        <div className="flex justify-between items-center mt-2">
          <div style={{ position: "relative", width: "100%", height: "auto", minHeight: "200px" }}>
            <Image
              alt="player gun image"
              src="/gun1.png"
              fill
              sizes="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4">
            <Label>TOKYO MARUI NEXT-GEN HK416 DELTA CUSTOM</Label>
        </div>
        <TypographyH4>Gun Chrony</TypographyH4>
        <div className="flex justify-between items-center mt-2 mb-6">
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Event</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">chrony</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right">1.23J</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right">1.23J</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div style={{ position: "relative", width: "100%", height: "auto", minHeight: "200px" }}>
            <Image
              alt="player gun image"
              src="/gun1.png"
              fill
              sizes="100%"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 mb-4">
            <Label>TOKYO MARUI NEXT-GEN HK416 DELTA CUSTOM</Label>
        </div>
        <TypographyH4>Gun Chrony</TypographyH4>
        <div className="flex justify-between items-center mt-2 mb-6">
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Event</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">chrony</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right">1.23J</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sunday Game #33</TableCell>
                <TableCell>19/05/2024</TableCell>
                <TableCell className="text-right">1.23J</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        
      </section>



    </div>
  );
}
