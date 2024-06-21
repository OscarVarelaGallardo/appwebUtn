

interface User {
    correo_electronico: string;
    nombre: string;
    apellido: string;
    matricula: string;
    credencial: {
        archivo_digital: string;
    };
    token: string;
    id_rol: {
        id: number;
        nombre_rol: string;
    };
    estatus: string;
}


const StudentList = ({ correo_electronico, nombre, apellido, credencial, matricula, id_rol, token }: User) => {


    return (
        <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-white-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-gray-500 hover:text-black">

                <div className="ps-3">
                    <div className="text-base font-semibold">
                        {nombre}
                    </div>

                    <div className="font-normal text-gray-500">

                        {correo_electronico}
                    </div>
                </div>
            </th>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 ">
                {apellido}
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {matricula}
            </td>
            <td className="px-6 py-4">
                <img className="w-10 h-10 rounded-full" src={
                    credencial ? credencial.archivo_digital : "https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1718236800&semt=sph"} alt="img_credential" />
            </td>
            <td className="px-6 py-4">
                <span className="text-sm font-medium text-green-500 dark:text-green-400">
                    {id_rol?.nombre_rol}
                </span>
            </td>

            <td className="px-6 py-4">
                <div className="flex items-center">

                    {!token.length ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-100">
                        Activo
                    </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-500 dark:text-red-100">
                        Inactivo
                    </span>}
                </div>
            </td>
            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 center">
                {
                    true ? <i className="fa-solid fa-message"></i> : <i className="fa-solid fa-message"></i>
                }
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
            </td>
        </tr>
    )
}

export default StudentList