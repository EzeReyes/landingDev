import React, { useState } from 'react';

const redes = [
    { id: 1, imagen: "https://img.icons8.com/color/48/linkedin.png", nombre: "linkedin", url: "https://www.linkedin.com/services/page/7146943198a877803b/"},
    { id: 2, imagen: "https://img.icons8.com/ios-filled/50/228BE6/github.png", nombre: "github", url: "https://github.com/EzeReyes"}
]

const cursos = [
  { id: 1, imagen: "./img/HTML & CSS.jpg", instituto: "Coder House", nombre: "Html y Css" },
  { id: 2, imagen: "./img/JAVASCRIPT.png", instituto: "Coder House", nombre: "Javascript"},
  { id: 3, imagen: "./img/REACT.png", instituto: "Coder House", nombre: "React"},
  { id: 4, imagen: "./img/NODEJS.png", instituto: "Coder House", nombre: "Node"}
]

const SobreMi = () => {
  const [estado, setEstado ] = useState(false)


  const bajarSeccion = () => {
    estado === false ? setEstado(true) : setEstado(false)
    console.log(estado)
  }



  return (
  <>
    <div className='flex flex-row items-center justify-center gap-2 my-10'>
      <hr className="w-20" style={{color:'#fee685'}}></hr>
      <h3 className='text-3xl text-white text-center'>SOBRE MI</h3>
    </div>
    <div className='flex gap-3 items-center justify-center text-gray-300 mb-6'>
      <button onClick={() => bajarSeccion()} >
        <img width="50" height="24" className={`bg-gray-300 rounded-4xl ${estado === true ? 'hidden' : 'block' }`} src="https://img.icons8.com/ios/50/circled-chevron-down.png" alt="circled-chevron-down"/> </button>
        <button onClick={() => bajarSeccion()} >
        <img width="50" height="24" className={`bg-gray-300 rounded-4xl ${estado === true ? 'block' : 'hidden' }`}  src="https://img.icons8.com/ios/50/circled-chevron-up.png"/></button>
      <p>Estudios y certificaciones</p>
    </div>

    <div className={`${estado === true ? 'grid sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 items-center w-1/2 justify-self-center justify-items-center justify-center content-center gap-10 bg-gay-100 transition delay-150 duration-300 ease-in-out' : 'hidden' }`}>
        {cursos.map((curso) => (
          <div key={curso.id} className='flex flex-col items-center justify-center bg-amber-900 h-40 w-auto'>
            <img src={curso.imagen} alt={curso.nombre} className='h-full' />
          </div>
        ))}
      </div>
        
      <div className='sm:flex flex-col sm:mx-120 my-20 gap-10 sm:p-0 ml-0 p-10'>
        <div className='sm:flex flex-col items-start justify-center sm:my-0 my-10 text-white'>
            <p>Mis redes de trabajo</p>
            <div className='flex flex-row gap-4'>
            {redes.map((red) => (
                <div key={red.id} className='flex flex-col gap-1'>
                    <p>{red.nombre}</p>
                    <a href={red.url} target='_blank'> <img src={red.imagen} title={red.nombre} alt={red.nombre} /> </a>
                </div>
                )
            )}
            </div>
        </div>
        <div className='sm:flex flex-col sm:my-0 my-10 text-white bg-gray-800 rounded p-4'>
              <p>Sobre mi</p>
                <p>Soy un joven de Mar del Plata, que inicie mis estudios por curiosidad, y encontre muchas cosas positivas, el hecho de crear herramientas, soluciones y ampliar la comunidad a traves del Internet</p>
        </div>
      </div>
  </>
  );
};

export default SobreMi;
