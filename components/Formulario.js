import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Formulario = () => {

    // Validación de formulario
    const formik = useFormik({
        initialValues: {
            nombre: 'HOLA',
            apellido: '',
            email: '', 
            password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El apellido es obligatorio'),
            email: Yup.string().email('El email no es válido').required('El email es obligatorio'),
            password: Yup.string().required('El password no puede ir vacio')
            .min(6, 'El password debe ser de al menos 6 caracteres')
        })
})

    return (
        <>
            <h4 className='text-center text-2xl text-white font-light'>Realicé su consulta</h4>

            <div className='flex justify-center mt-5' title="Envie sus datos y me contactaré con usted">
                <div className='w-full max-w-sm'>
                    <form 
                        className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4'
                        // onSubmit={formik.handleSubmit}
                    >

                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nombre'>
                                Nombre
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="nombre"
                                type='text'
                                // value={formik.values.nombre}
                                placeholder='Su Nombre' 
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                            />
                    </div>
                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='apellido'>
                                Apellido
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="apellido"
                                type='text'
                                // value={formik.values.apellido}
                                placeholder='Su Apellido' 
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                            />
                    </div>
                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                Email
                            </label>

                            <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="email"
                                type='email'
                                // value={formik.values.email}
                                placeholder='Su email' 
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                            />
                    </div>

                    <div className='mb-4'>
                            <label className='block text-gray-800 text-sm font-bold mb-2' htmlFor='consulta'>
                                Tu mensaje
                            </label>

                            <textarea 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="consulta"
                                type='text'
                                // value={formik.values.email}
                                placeholder='Escribe tu consulta' 
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                            />
                    </div>
                    
                        <input 
                            type='submit'
                            value="Realizar Consulta"
                            title="Enviar Consulta"
                            className='bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:bg-gray-900' 
                        />

                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulario;