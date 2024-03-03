import { handleAuthentication } from '../lib/PocketBase';
import { useSearchParams } from 'react-router-dom';
import '../css/LinkTree.css'

function LinkTree() {

    const links = [
        {
            service_name: "Strava"
        }
    ]

    const [searchParams] = useSearchParams();
    const discordId: string | null = searchParams.get("discordId");    

    if(discordId == null) {
        return (
            <h1>Invalid DiscordId Link</h1>
        )
    }

    return (
        <div className="LinkTree">
            <h1 className='linktree-header'>EBoyClique Links</h1>
            <button className='linktree-button' id='strava' onClick={ async () => handleAuthentication(discordId)}>
                Authorize with {links[0].service_name}
                </button>
        </div>
    )
}

export default LinkTree;