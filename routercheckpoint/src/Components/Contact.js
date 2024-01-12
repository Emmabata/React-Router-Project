import { useLocation } from "react-router-dom";
import { useEffect } from 'react'

const Contact = () => {
    const location = useLocation()

    useEffect(() => {
        alert("je m'appelle Harry, tu es bienvenue enchante", location)
    })
    return ( 
        <div>
            <h1>hello from Contact</h1>
        </div>
     );
}
 
export default Contact;