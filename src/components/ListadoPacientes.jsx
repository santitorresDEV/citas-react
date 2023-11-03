import { useEffect } from "react";
import { Paciente } from "./Paciente";



export function ListadoPacientes({pacientes,setPaciente,eliminarPaciente}) {

    useEffect(() => {
        if(pacientes.length){
            console.log('Nuevo paciente agregado')
        }
    }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

                    <p className="text-xl mt-5 text-center mb-10">
                        Administra tus {' '}
                        <span className="text-indigo-600">Pacientes y citas</span>
                    </p>

                    {
                        pacientes.map(paciente => (
                                <Paciente 
                                    key={paciente.id}
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                    eliminarPaciente={eliminarPaciente}
                                />                
                        ))
                    }
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>

                    <p className="text-xl mt-5 text-center mb-10 font-bold">
                        Agrega un nuevo paciente {' '}  <span className="text-indigo-600">Se agregaran en este lugar</span>
                    </p>
                </>
            )}
        </div>
    );

}