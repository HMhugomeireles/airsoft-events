import { createClient } from "@/utils/supabase/server";
import { formatFirstName, formatLastName } from "@/utils/utils";

type UserDetails = {
    avatar: string;
    email: string;
    firstName: string;
    lastName: string;
    nick: string;
    birthDay: string;
    country: string;
    state: string;
    apd: string;
    apdNumber: string;
    apdExpiresAt: string;
}


export async function getUserDetails(userId: string): Promise<UserDetails> {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const { data: playerFriends } = await supabase.from("friends").select('*').eq('user_id', userId);
    const { data: playerProfile } = await supabase.from("player").select('*').eq('user_id', userId).single();
    const { data: playerGuns } = await supabase.from("player_gun").select('*').eq('user_id', userId);
    const { data: eventsPlayed } = await supabase.from("player_gun_event").select('*').eq('user_id', userId);

    return {
        avatar: `${user?.user_metadata.avatar_url}`,
        email: `${user?.email}`,
        firstName: `${formatFirstName(user?.user_metadata.full_name)}`,
        lastName: `${formatLastName(user?.user_metadata.full_name)}`,
        nick: ``,
        birthDay: `${user?.user_metadata.avatar_url}`,
        country: `${user?.user_metadata.avatar_url}`,
        state: `${user?.user_metadata.avatar_url}`,
        apd: `${user?.user_metadata.avatar_url}`,
        apdNumber: `${user?.user_metadata.avatar_url}`,
        apdExpiresAt: `${user?.user_metadata.avatar_url}`,
    }
}