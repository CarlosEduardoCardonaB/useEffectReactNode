import React, { useEffect, useState } from 'react'




export const AjaxComponent = () => {

    const [usurios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState([true]);
    const [errores, setErrores] = useState("");


//Generico /basico

const getUsuariosEstaticos = () => {
    setUsuarios([
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }
    ])
}

const getUsuariosAjaxParmas = () => {

    fetch('https://reqres.in/api/users?page=1')
        .then(rpta => rpta.json())
        .then(resultadoFinal => {
            setUsuarios(resultadoFinal.data)
        },
        error => {
            console.log(error)
        })

    setUsuarios([
        
    ])
}

const getUsuariosAxajAzyncAwait = () =>{
    
    setTimeout(async() => {
        try {
            const peticion = await fetch('https://reqres34.in/api/users?page=2');
            const {data} = await peticion.json();
            setUsuarios(data);
            setCargando(false);            
        } catch (error) {
            console.log(`Hola ${error.message}`);
            setErrores(error.message);
        }
        
    }, 3000);
    
    //console.log(data);
}

useEffect(() => {
    //getUsuariosEstaticos()
    getUsuariosAjaxParmas()
    getUsuariosAxajAzyncAwait()
}, []);

//Cuando está cargando mostramos esto:
if(errores !== ""){
    return(
        <div className='errores'>
            {errores}
        </div>
        
    );
}
else if(cargando){
    return(
        <div className='cargando'>
            Cargando datos...
        </div>
    );
}
else if(cargando == false && errores == ""){
    //Cuando ya carga todo retornamos esto
    return (
        <div>
            <h2>Lista de usuarios via Ajax:</h2>
            <ol className='usuarios'>
                {
                    usurios.map(usuario => {
                        return <li key={usuario.id}>
                                <img src={usuario.avatar} width="30" />
                                &nbsp;
                                {usuario.first_name} 
                                {usuario.last_name}
                            </li>
                    })
                }
            </ol>
        </div>
    )
}



}
