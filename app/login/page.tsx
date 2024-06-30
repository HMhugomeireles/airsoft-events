"use client"

import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import Image from "next/image";
import { TypographyH4 } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { handleLogin } from "./actions";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Login() {
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

      <section>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Login</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
      </section>

      <section className="grid h-screen place-items-center">
        <div className="flex flex-col max-w-96">
           <Button
                className="w-full"
                onClick={() => handleLogin('google')}
            >Google</Button>
        </div>
      </section>
    </div>
  );
}
