import React, { useEffect, useState } from 'react'




export const AjaxComponent = () => {

    const [usurios, setUsuarios] = useState([])

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

    fetch('https://reqres.in/api/users?page=2')
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

useEffect(() => {
    //getUsuariosEstaticos()
    getUsuariosAjaxParmas()
}, [])

    return (
        <div>
            <h2>Lista de usuarios via Ajax:</h2>
            <ol className='usuarios'>
                {
                    usurios.map(usuario => {
                        return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}<img src={usuario.avatar} /></li>
                    })
                }
            </ol>
        </div>
    )
}
