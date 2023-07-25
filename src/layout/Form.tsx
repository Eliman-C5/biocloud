import React from 'react'

export const Form = () => {
  return (
    <form className='form-biocloud-style mt-100'>
      <h2 style={{color: '#071920'}} className='mb-5'>Envíanos un mensaje</h2>
      <input type="text" placeholder='Nombre' className='form-control' />
      <input type="email" placeholder='Correo electrónico' className='form-control' />
      <input type="text" placeholder='Asunto' className='form-control' />
      <textarea cols={30} rows={10} className='form-control' style={{height: 'auto'}} placeholder='Mensaje'></textarea>
      <button type="submit" style={{background: '#28A7E6', padding: '20px 0'}} className="btn hover-up font-md">Enviar</button>
    </form>
  )
}
