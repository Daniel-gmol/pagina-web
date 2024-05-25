import React from 'react'
import Button from './Button'

function Card({cardClass, buttonClass, onCardClick, ...props} : {cardClass: string, buttonClass: string, onCardClick: Function, [key: string] : any}) {
  return (
    <div className={`flex flex-col justify-evenly items-center
                    rounded-md p-3
                    ${cardClass}`}
                    style={{width: '100%', height: '100%'}}
    >
      <img className='rounded-sm w-full mt-2' src={props.img}></img>

      <h2 className='flex w-full ml-2 mt-2 mb-2 text-xs font-bold'>{props.title}</h2>
     

      <div className='flex w-full ml-2 mt-2 mb-2'>
        <Button color={buttonClass} className='border-0 rounded-sm w-24 h-10 pr-5'
          onClick={onCardClick}
        >
          <div className='flex items-center justify-center'>
            <span> More </span>
            <div className='ml-2 w-0 h-0
              border-t-[7px] border-t-transparent 
              border-l-[15px] border-l-white
              border-b-[7px] border-b-transparent'>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Card
