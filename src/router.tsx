import {createBrowserRouter} from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './views/Login'
import Settings from './views/Settings'
import ForgotPassword from './views/ForgotPassword'
import { action as loginAction } from './views/Login'
export const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout/>,
        children:[
            {
                index:true,
                path:'/',
                element:<Login/>,
                action:loginAction 
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