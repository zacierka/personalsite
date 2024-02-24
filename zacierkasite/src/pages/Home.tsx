import { pb } from '../lib/PocketBase';
function Home() {
    return (
        <button onClick={() => {
            pb.collection('users').authWithOAuth2({ provider: 'strava', scopes: ['activity:read']}).then((d) => {

                if(d.meta.accessToken == "") {
                    //refreshToken()
                }

                fetch("https://www.strava.com/api/v3/athlete", {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${d.meta.accessToken}`, // ${pb.authStore.token} notice the Bearer before your token
                    },
                }).then((response) => response.json())
                .then(data => {
                    console.log(data);
                })
                //console.log(d);
                
            });



            // send request back to strava?


           }
        }>Authorize</button>
    )
}

export default Home;