import React, {useState} from 'react';
import Pregunta from './Components/Pregunta'

function App() {

  //definir state
  const [presupuestp, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>

     <div className='contenido-principal contenido'>
     <Pregunta
        guardarPresupuesto={guardarPresupuesto}
        guardarRestante={guardarRestante}
     />
     </div>

    </div>
  );
}

export default App;
