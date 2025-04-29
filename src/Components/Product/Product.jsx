import React from 'react'
import './Product.css'
import Card from '../Card/Card'

export const Product = () => {
  return (
<div>
        <h1 className='title-seccion1'> 🚀¡Dale identidad a tu negocio con llaveros personalizados!</h1>
    <div className='divProduct-seccion1'>
        <Card />
        <Card />
        <Card />
    </div>
    <h2 className='title-seccion2'>¡Llaveros personalizados con tu nombre! 🔠✨</h2>
    <div className='divProduct-seccion2'>
        <Card />
        <Card />
        <Card />
        </div>

</div>
  )
}
