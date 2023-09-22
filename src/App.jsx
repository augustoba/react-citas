import { useState } from "react"
import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/formulario"
import Header from "./components/header"

function App() {

  const [pacientes,setPacientes]= useState([]);
  const[paciente,setPaciente]=useState({});
 
  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
    paciente={paciente}    
    pacientes={pacientes}
     setPacientes={setPacientes}
    /> 
    <ListadoPacientes
    pacientes={pacientes}
    setPaciente={setPaciente}
    />
    </div>
    
    </div>
  )
 }

export default App
