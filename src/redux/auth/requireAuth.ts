import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"
import { redirect } from "next/navigation"

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken);
    const localToken = localStorage.getItem("accessToken");

    return (
        
        localToken
            ? redirect('/admin')
            : token ? redirect('/') : redirect('/admin')
    )
}
export default RequireAuth