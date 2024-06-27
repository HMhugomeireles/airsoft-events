"use server"

import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function handleLogin(provider: 'google') {
    const origin = headers().get("origin");
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    const supabase = createClient();

    const { error, data } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        console.log(error);
        return NextResponse.redirect(`${origin}/?er=something goes wrong`);
    }

    return redirect(data.url);
}