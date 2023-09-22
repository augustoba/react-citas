import { useState } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/formulario"
import Header from "./components/header"

function App() {

  const [pacientes,setPacientes]= useState([]);
  const[paciente,setPaciente]=useState({});

  const eliminarPaciente =(id) =>{
      const pacientesActualizados =pacientes.filter(paciente => paciente.id !== id);
     console.log(pacientesActualizados);
     setPacientes(pacientesActualizados)
    }
 
  return (

    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
    paciente={paciente}    
    pacientes={pacientes}
     setPacientes={setPacientes}
     setPaciente={setPaciente}
    /> 
    <ListadoPacientes
    pacientes={pacientes}
    setPaciente={setPaciente}
    eliminarPaciente={eliminarPaciente}
    />
    </div>
    
    </div>
  )
 }

export default App
