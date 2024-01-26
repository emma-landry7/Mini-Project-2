import { Route, Routes } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import HomePage from "../pages/HomePage"
import PageNotFound from "../pages/PageNotFound"

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<LoginForm {...props} />} />
            <Route path='/home' element={<HomePage {...props} />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;