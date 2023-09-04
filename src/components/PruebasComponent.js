import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    //estos son useStates - funciones que cambian el valor de la variable. por ej: 
    //Cada que llamamos la función setUsuarios cambia la variable usuario
    const [usuario, setUsuarios] = useState('CarlosCardona');
    const [fecha, setFecha] = useState('01/01/1983');
    const [contador, setContador] = useState(0);

    const modUsuario = e =>{
        setUsuarios(e.target.value);
        
    }

    const changeDate = e =>{
        setFecha(
            //new Date().toLocaleDateString()
            Date.now()
            );
        
    }

    //El useEffect escucha cualquier evento en el componente, por ejemplo evento de botones, de onChange, etc
    useEffect(()=>{        
        setContador(contador + 1);
        console.log(`Se ha cargado el componente. El contador va en: ${contador}`);
    },[usuario]) 
    //Con estos corchetes vacíos [] de esta línea le indicamos al useEffect que se ejecute una sola vez
    //Si ingresamos una función de los useStates dentro de los corchetes por ej: "[usuario]" 
    //esta se va a ejecutar solo cuando esa propiedad "usuario" cambia. El usuario va a cambiar cada que llamamos 
    //a la función del useState, en este caso el setUsuarios.
    //También se pueden tener varias propiedades, por ej [usuario, fecha]

  return (
    <div>
        <h1>El efecto  - Hook useEffect</h1>
        <strong className={ contador >= 10 ? 'label label-green':'label'}>{ usuario }</strong>
        <strong className='label'>{ fecha }</strong>
        <p>
            <input 
                type='text'
                onChange={ modUsuario }
                placeholder='Cambiar el nombre'
            ></input>
            <button onClick={ changeDate }>Cambiar Fecha</button>
        </p>
        {
            //Con esta condición podemos cargar otro componente luego de que se cumpla la condición
            usuario === 'carlos' && <AvisoComponent />
        }
    </div>
  )
}
