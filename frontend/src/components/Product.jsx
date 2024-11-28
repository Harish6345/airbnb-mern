import React  from 'react'
import { images } from '../assets/Assets'

const Product = ({iconsetter}) => {


  
  return (
    <div className='grid grid-cols-auto gap-6 my-4 ' >
    {images.filter(v=>v.category==iconsetter).map((props,index)=>(
      <div key={index} className='border flex flex-col gap-1 justify-center hover:scale-105 duration-300 my-4 cursor-pointer'> <img className='rounded-lg ' src={props.image
  } alt="" />
  <p className='font-semibold'>{props.name}</p>
  <p >{props.about}</p>
  <p className='text-sm font-semibold'>{props.status}</p>
        </div>
 
     ))}


    </div>
  )
}

export default Product