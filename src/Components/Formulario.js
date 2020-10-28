import React, {useState} from 'react';
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('')
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.length === 0)  {
            guardarError(true)
            return;
        }
        guardarError(false)


        //construir el gasto
        const gasto = {
            nombre: nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }
     

        //pasar el gasto al componente principal
        guardarGasto(gasto)
        guardarCrearGasto(true)

        //resetaear el form
        guardarNombre('')
        guardarCantidad(0)

    }
    return (  

        <form
        onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje='Ambos Campos son Obligatorio o presupuesto incorrecto'/> : null}
            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                type='text'
                className= 'u-full-width'
                placeholder='Ej. Transporte'
                value={nombre}
                onChange={ e => guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad del Gasto</label>
                <input
                type='number'
                className= 'u-full-width'
                placeholder='Ej. 300'
                value={cantidad}
                onChange={ e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
            <input 
                type='submit'
                className='button-primary u-full-widt'
                value='agregar gasto'
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;
