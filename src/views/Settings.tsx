import { useEffect, useState } from "react"
import { getUserData } from "../service/UserService";
import StudentList from "../components/StudentList";
interface User {
  correo_electronico: string;
}
interface Users {
  nombre: string;
  apellido: string;
  matricula: string;
  correo_electronico: string;
  credencial: {
    archivo_digital: string;
  }
  token: string;
  id_rol: {
    id: number;
    nombre_rol: string;
  };
  estatus: string;
}

const Settings = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const userString = localStorage.getItem('response'); // Removed await since localStorage.getItem is not asynchronous
      if (userString) {
        const userObject = JSON.parse(userString);

        if (userObject.user) {
          setUser(userObject.user);
          setIsLogged(true);
        }
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('response')
    const userObject = JSON.parse(user as string)

    if (user && userObject.user) {
      setUser(userObject.user)
    }

  }, [])

  useEffect(() => {
    //hacer un fetch a la api para obtener los datos del usuario
    const fetchUser = async () => {
      const listofUsers = await getUserData()
      if (listofUsers) {
       
        const { newArreglo } = listofUsers
   
        setUsers(newArreglo);
      }
    }
    fetchUser()
  }
    , [])


  return (
    <div className="
    sm:pl-5 sm:pr-5 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 xl:pl-32 xl:pr-32 2xl:
    bg-gray-50 dark:bg-gray-200 pt-2 rounded-lg">
      {isLogged &&
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => {
            localStorage.removeItem('response')
            window.location.href = '/'
            setIsLogged(false)
          }}
        >Cerrar sesión</button>
      }
      <section className="bg-gray-50 dark:bg-white-600 p-2  md:place-items-center w-full py-2 rounded-lg ">

        <div className="flex flex-col  mx-auto lg:py-0">

          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

          </a>
          <div className="flex flex-row
        bg-white rounded-lg shadow dark:border w-full ">

            <div className="flex justify-between w-full p-4">
              <div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-black uppercase">
                  Administra
                  <span className="text-emerald-600 dark:text-emerald-600">
                    tus datos
                  </span>
                </h1>
                <p className="text-gray-600
                    text-md font-normal leading-tight tracking-tight
                  dark:text-gray-300 uppercase">
                  Credenciales de acceso

                </p>
                {user &&
                  <div className="flex items-center">
                    <p className="text-gray-600  text-sm">Cuenta: {user.correo_electronico}</p>
                  </div>
                }

              </div>

              <img className="w-16 h-18 rounded-full" src="https://utn.edomex.gob.mx/sites/utn.edomex.gob.mx/files/images/acerca_de_la_utn/logo_300px_400px.png" alt="Profile picture" />

            </div>

          </div>



        </div>
      </section>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg p-5  rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white  ">
          <div>
           {/*  <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Action button</span>
              Action
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
              </svg>
            </button> */}
            {/* Dropdown menu */}
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          </div>
          <label htmlFor="table-search" className="sr-only"></label>
          <div className="relative pt-2 max-w">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 111 8a7 7 0 0114 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar  " />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Apellido
              </th>
              <th scope="col" className="px-6 py-3">
                Matricula
              </th>
              <th scope="col" className="px-6 py-3">
                Imagen
              </th>


              <th scope="col" className="px-6 py-3">
                Rol
              </th>
              <th scope="col" className="px-6 py-3">
                Estatus
              </th>

              <th scope="col" className="px-6 py-3">
                Mensajes
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <StudentList
                key={user.correo_electronico}
                nombre={user.nombre}
                apellido={user.apellido}
                matricula={user.matricula}
                correo_electronico={user.correo_electronico}
                credencial={user.credencial}
                id_rol={user.id_rol}
                estatus={user.estatus}
                token={user.token}
              />
            ))}
          </tbody>
        </table>
      </div>



    </div>


  )
}

export default Settings