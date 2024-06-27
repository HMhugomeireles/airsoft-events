
import { createClient } from "@/utils/supabase/server";
import { NextResponse, NextRequest } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    //const { record } = req.body ;

    console.log("body: ",req.body)
    
    //const supabase = createClient();

    //const profile = await supabase.from("player")
    
    res.json();
}