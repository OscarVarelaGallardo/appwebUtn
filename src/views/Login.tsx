import { Link, Form, useActionData, ActionFunctionArgs, redirect } from "react-router-dom";
import ErrorMessage from '../components/ErrorMessage';
import { loginService } from '../service/LoginService';
export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = '';
  if (Object.values(data).includes('')) {
    error = 'Todos los campos son requeridos';
  }
  if (error.length) {
    return error;
  }
  const response = await loginService(data)
  if (!response) {
    return 'Credenciales invalidas';
  }
    //guardarlo en el local storage
    localStorage.setItem('response', JSON.stringify(response));
  return redirect('/controlPanel');

}

const Login = () => {
  const error = useActionData() as string;
  console.log(error);


  return (
    <section className="bg-gray-50 dark:bg-emerald-600 md:grid md:place-items-center w-full h-screen">
      <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow dark:border w-full  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900   dark:text-black uppercase">
              Iniciar <span className="text-emerald-600 dark:text-emerald-600">Sesión</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 uppercase">
              Credenciales de acceso
            </p>
            {error && <ErrorMessage >{error}</ErrorMessage>}
            <Form className="space-y-4 md:space-y-6" method="POST">
              <div className="md:flex-col">
                <div className="space-y-1 ">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray uppercase">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="correo@utn.edu.com.mx" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Contraseña</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Recordarme
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 mt-4">
                  Iniciar Sesión
                </button>
                <Link to="/forgotpassword" className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500 mt-10">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </Form>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-r-lg ">
            <img src="https://utn.edomex.gob.mx/sites/utn.edomex.gob.mx/files/images/acerca_de_la_utn/logo_300px_400px.png" alt="Login" className="object-cover w-full h-full max-w-sm " loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Login;