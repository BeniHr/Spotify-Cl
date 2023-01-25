import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({ auth }) => {
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes