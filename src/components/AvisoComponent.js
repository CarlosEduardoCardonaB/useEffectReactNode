import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Alerta de cuando se monta el componente
        alert('Se ha montado el componente');

        //Alerta cuando se desmonta el componente
        return () =>{
            alert('Desmontado');
        }

    }, [])

  return (
    <div>
        <h1>Hemos superado los 20 cambios</h1>
        <button onClick={ e => {
            alert('Wellcome');
        }}>Mostrar Alerta</button>    
    </div>
  )
}
