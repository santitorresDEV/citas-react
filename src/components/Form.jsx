import {useState, useEffect} from 'react'
import { Error } from './Error';


function Form({pacientes,setPacientes, paciente, setPaciente}){

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length !== 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);
        return random + date;
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if([nombre, propietario, email, alta, sintomas].includes('')){
            console.log('Hay un error');
            setError(true);
            return;
        }

        setError(false);

        // Asignar ID
        const objpaciente = {
            nombre,
            propietario,
            email,
            alta,
            sintomas
        }

        if(paciente.id){
            objpaciente.id = paciente.id;
            const nuevoPacientes = pacientes.map(item => item.id === paciente.id ? objpaciente : item);
            setPacientes(nuevoPacientes);
            setPaciente({});
        }else{
            objpaciente.id = generarId();
            setPacientes([
                ...pacientes,
                objpaciente
            ]);
        }


        // Resetear el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento pacientes</h1>
            <p className="text-lg mt-5 font-bold text-center mb-10">
                Añade pacientes y {' '}
                <span className="text-indigo-600">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error ? <Error>Todos los campos son obligatorios</Error> : null}

                <div className="mb-10">
                    <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                        </label>
                    <input type="text"  
                    id="nombre" 
                    placeholder="Nombre de la mascota" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                        </label>
                    <input 
                    type="text" 
                    name="" 
                    id="propietario" 
                    placeholder="Nombre del propietario" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                        </label>
                    <input 
                    type="email" 
                    name="" 
                    id="email" 
                    placeholder="Correo Electronico" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                        </label>
                    <input 
                    type="date" 
                    name="" 
                    id="alta" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={alta}
                    onChange={e => setAlta(e.target.value)}
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                        </label>
                    <textarea 
                    name="" 
                    id="sintomas" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input type="submit" value={paciente.id? 'Editar paciente': 'Agregar paciente'}  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"/>
            </form>
        </div>
    );
}

export default Form;