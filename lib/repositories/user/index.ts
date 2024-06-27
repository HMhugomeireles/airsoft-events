import { createClient } from "@/utils/supabase/server";

export async function getUserDetails(userId: string) {
    const supabase = createClient();
    const { data: user } = await supabase.auth.getUser();
    const { data: playerFriends } = await supabase.from("friends").select();
    const { data: playerProfile } = await supabase.from("player").select();
    const { data: playerGuns } = await supabase.from("player_gun").select();
    const { data: eventsPlayed } = await supabase.from("player_gun_event").select();
}