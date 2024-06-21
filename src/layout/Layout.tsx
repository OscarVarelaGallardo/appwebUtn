import { Outlet } from "react-router-dom"


const Layout = () => {

  // Update URL and check for specific paths to set logged in state

  return (
    <>
      <div className="bg-emerald-600 dark:bg-emerald-600 pt-10 ">
      <div className="flex flex-col items-end justify-end w-full p-4">
        <div className="flex flex-col items-end justify-end w-full p-4">
        
        </div>
      </div>
      <Outlet />
      </div>
    </>
  )
}

export default Layout