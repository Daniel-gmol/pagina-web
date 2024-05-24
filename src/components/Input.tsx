import React from 'react'

function Input({className='', classButton='', classLabel='', ...props}) {
    const divClasses = 
        `flex flex-wrap flex-col w-full
        ${className}`
    
    const inputClasses = 
        `
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
                title={props.title}
                type={props.type}
                autoComplete={props.autocomplete}
                value={props.value}
                onChange={props.onChange}
                />
    </div>
  )
}

export default Input
