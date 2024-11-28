import { Navigate, useLocation } from "react-router-dom"





const CheckAuth = ({isAuthenticated, user, children }) => {


    const location = useLocation()

    if(!isAuthenticated && !(location.pathname.includes('/login')) || location.pathname.includes('/register')){
        return <Navigate to="/auth/login"></Navigate>
    }

  return (
    <div>Check Authenticated</div>
  )
}

export default CheckAuth