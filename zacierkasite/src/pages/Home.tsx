import { pb } from '../lib/PocketBase';
function Home() {

    pb.collection('users').getList(1, 20).then((data) => {
        data.items.forEach((u) => {
            pb.send(`/api/collections/_pb_users_auth_/records/${u.id}/external-auths`, {}).then((d) => {
                console.log(d[0].providerId);
            })
        })
    })



    return (
        <h1>Home</h1>
    )
}

export default Home;