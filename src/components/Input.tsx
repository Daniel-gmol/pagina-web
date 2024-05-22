import React from 'react'

function Input({className='', classButton='', classLabel='', ...props}) {
    const divClasses = 
        `flex flex-wrap flex-col w-full
        ${className}`
    
    const inputClasses = 
        `w-[40%] h-8
        border-b-2 outline-none border-black 
        text-left
        ${classButton}`
    
    const labelClasses = 
        `Open-Sans text-sm text-left
        ${classLabel}`

    return (
    <div className={divClasses}>
        <label className={labelClasses} 
                htmlFor={props.title}>{props.title}
        </label>
        <input className={inputClasses} 
                id={props.title}
                type={props.type}
                title={props.title}
                autoComplete='props.autocomplete'/>
    </div>
  )
}

export default Input
