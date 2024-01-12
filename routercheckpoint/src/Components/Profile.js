import {useParams} from 'react-router-dom'

const Profile = () => {
    const {Bata}  = useParams()
    return ( 
        <div>
            {Bata}
            <h1>hello from Profile</h1>
        </div>
     );
}
 
export default Profile;