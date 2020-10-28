import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    
    //Funcion que lee el presupuesto
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value))
    }

    //submit para agregar presupuesto
    const agregarPresupusto = e =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }


        //si pasa la validcion
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
        
    }

    return (
        <Fragment>
            <h2> Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto' /> : null}
            <form
            onSubmit={agregarPresupusto}
            >
                <input
                    type= 'number'
                    className='u-full-width'
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type='submit'  
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'  
                />
            </form>
        </Fragment>
      );
}
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
 
export default Pregunta;