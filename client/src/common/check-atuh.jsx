import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({children, isAuthenticated, user}) => {


 
const location = useLocation()

 if(!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))){
    return <Navigate to="/auth/login" />
 }

 if(isAuthenticated && (location.pathname.includes('/admin'))){
    if(user?.role === "admin"){
        return <Navigate to="/admin/dashboard" />
    }else{
        return <Navigate to="/shop/home" />
    }
    
 }
    return <>{children}</>
};

export default CheckAuth;
