import { createClient } from "@/utils/supabase/server";


export async function getAllEvents() {
    const supabase = createClient();

    let currentDate = new Date();
    let twoWeeksFromNow = new Date();
    twoWeeksFromNow.setDate(currentDate.getDate() + 14);
    let twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(currentDate.getDate() - 14);

    const { data } = await supabase
        .from("events")
        .select()
        .gte('event_date', (twoWeeksAgo.toISOString()))
        .lte('event_date', (twoWeeksFromNow.toISOString()))


    
}