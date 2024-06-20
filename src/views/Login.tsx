import { Link, Form , redirect,useNavigate } from "react-router-dom";
import ErrorMessage from '../components/ErrorMessage';
import Spinner from "../components/Spinner";
import { useState } from "react";
import { loginService } from '../service/LoginService';



const Login = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
 
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = { email, password };
    const error = '';
    if (Object.values(data).includes('')) {
      setLoading(false);
      setError('Todos los campos son requeridos');
      clearError();
      return 'Todos los campos son requeridos';
    }
    if (error.length) {
      return error;
    }
    const response = await loginService(data)

    if (!response) {
      setLoading(false);
      setError('Credenciales invalidas');
      clearError();
      return 'Credenciales invalidas';
    } 
    

    if (response.status === 200){
      setLoading(false);
      localStorage.setItem('response', JSON.stringify(response));
      navigate('/controlPanel');
      return

    }
  
  }

  const clearError = () => {
    setTimeout(() => {
      setError('');
    }, 2000);
  }
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
          

            <Form className="space-y-4 md:space-y-6" >
              <div className="md:flex-col">
                <div className="space-y-1 ">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray uppercase">
                    Email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-blue-500" placeholder="correo@utn.edu.com.mx" 
                    onChange={(e) => {
                      setEmail(e.target.value);
                    } } />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Contraseña</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" 
                    onChange={(e) => {
                      setPassword(e.target.value);
                    } } />

                </div>
                
                {loading ? <Spinner /> :
                  <button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 mt-4"
                    onClick={handleSubmit}>
                    Iniciar Sesión
                  </button>
                }
                <Link to="/forgotpassword" className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-500 mt-10">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </Form>
            {error && <ErrorMessage >{error}</ErrorMessage>}
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