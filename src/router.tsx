import {createBrowserRouter} from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './views/Login'
import Settings from './views/Settings'
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
            }
        ]

    },
  
])