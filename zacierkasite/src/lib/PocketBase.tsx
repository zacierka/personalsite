import PocketBase from 'pocketbase';

export const pb = new PocketBase("http://127.0.0.1:8090");

export async function handleAuthentication(discordId: string | null) {   
    await pb.collection('users').authWithOAuth2({ 
        provider: 'strava', 
        scopes: ['activity:read'], 
        createData: {
            discordId: discordId
        }
    })

    pb.authStore.clear(); // auto logout user

    window.location.replace("http://localhost:5173/#/oauth");
}