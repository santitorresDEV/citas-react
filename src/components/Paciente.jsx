export function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const { nombre, propietario, email, alta, sintomas, id } = paciente;

  return (
    <div>

            <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Alta: <span className="font-normal normal-case">{alta}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: <span className="font-normal normal-case">{sintomas}</span>
                </p>
                <div className="flex justify-between mt-10">
                    <button
                        type="button"
                        className="uppercase font-bold px-10 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white"
                        onClick={() => eliminarPaciente(id)}
                    >
                        Eliminar &times;
                    </button>

                    <button
                        type="button"
                        className="uppercase font-bold px-10 py-2 rounded-lg bg-green-800 hover:bg-green-900 text-white"
                        onClick={() => setPaciente(paciente)}
                    >
                        Editar
                    </button>


                </div>
            </div>
    
    </div>
    );
}