import {createBrowserRouter} from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './views/Login'
import Settings from './views/Settings'
import ForgotPassword from './views/ForgotPassword'
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                index:true,
                path:'/',
                element:<Login/>,
            },
            {
                path:'controlPanel',
                element:<Settings/>
            },
            {
                path:'forgotpassword',
                element:<ForgotPassword/>
            },
            {
                path:'*',
                element:<h1>404 Not Found</h1>
            }
        ]

    },
  
])