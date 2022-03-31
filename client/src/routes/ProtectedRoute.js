import {Navigate} from "react-router-dom";

function ProtectedRoute({children}) {
    // const fakeAuth = true;
    const isLoggedIn = localStorage.getItem("access_token")
    // console.log(isLoggedIn);

    if (!isLoggedIn) return <Navigate to="/login" />
    // if (!fakeAuth) return <Navigate to="/login" />

    return children
}

export default ProtectedRoute;