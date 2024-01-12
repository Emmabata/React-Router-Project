import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 5000)
    })

    return(
        <div>
            <h2>404 NOT FOUND</h2>
        </div>
    )
}

export default NotFound