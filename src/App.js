import React, { useState, useEffect } from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";

function App() {
  //definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto){
      //agrega el presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)
    
    //vualve a false
      guardarCrearGasto(false)
    }


  },[gasto])



  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarpregunta ? (
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos}/>
              <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
