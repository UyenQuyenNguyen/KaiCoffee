import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="notfound">
            <img style={{ width: '40vw' }} src="https://res.cloudinary.com/dz96u1u2a/image/upload/v1693308819/Pngtree_error_404_page_not_found_6681621_rkbicw.png" />
            <Button
                variant="contained"
                onClick={() => navigate('/') }
            >Go to home</Button>
        </div>
    )
}


export default NotFound