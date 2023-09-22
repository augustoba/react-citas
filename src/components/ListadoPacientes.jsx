import { useEffect } from "react";
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes,SetPaciente,setPaciente}) => {
  
  useEffect(() => {
    if (pacientes.length !=0 ) {
      console.log("nuevo paciente");
    }
           
  }, [pacientes]);

  return (
    <div className="w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll" >
     
      {pacientes.length !=0?(
        <>
      <h2 className="font-black text-3xl text-center" >Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center"> Administra tus {''}

      <span className="text-indigo-600 font-bold">Pacientes Y Citas</span>

    </p>

    { pacientes.map( (paciente) => (
      
      <Paciente
      key={paciente.id}
      paciente={paciente}
      setPaciente={setPaciente}
      />
    
  ))}
    </>
      ):(
        <>
        <h2 className="font-black text-3xl text-center" >No hay Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center"> comienza agregando pacientes {''}

      <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>

    </p>

        </>
      )}
      

    
    
 
    </div>
    
  )
}

export default ListadoPacientes