import PocketBase from 'pocketbase';

export const pb = new PocketBase("http://127.0.0.1:8090");

export async function handleAuthentication(discordId: string | null) {   
    const authData = await pb.collection('users').authWithOAuth2({ 
        provider: 'strava', 
        scopes: ['activity:read'], 
        createData: {
            discordId: discordId
        }
    })
    console.log(authData);
    // if(pb.authStore.model) {
    //     if(authData.meta) {
    //         const data = {
    //             "stravaId": authData.meta.id,
    //             "user": authData.record.id
    //         };

    //         const record = await pb.collection('users_strava').create(data);
    //     }
    // }

    pb.authStore.clear(); // auto logout user

}