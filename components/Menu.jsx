import React from 'react'

const menu = ['Inicio', 'Buscar', 'Explorar', ' Reels','Mensajes', 'Crear' , 'Notificacion', 'Perfil']

export default function Menu( {opciones}) {
  return (
    <div className=' mx-5' >
      {
        menu.map((opcion)=>{
            return(
                <div className=' mb-4'>

                                 <p>{opcion} </p>
                </div>
             
            )
        })
      }
    </div>
  )
}
