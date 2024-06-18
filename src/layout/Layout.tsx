import { Outlet } from "react-router-dom"

const Layout = () => {
//decalarar un state

  return (

 
    <>
      <div className="flex flex-col items-end justify-end w-full p-4">
        <div className="flex flex-col items-end justify-end w-full p-4">
         
          <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cerrar sesión</button>
         
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Layout