import React from 'react'

function Input({className='', classInput='', classLabel='', ...props}) {
    const divClasses = 
        `inline-block
        ${className}`
    
    const inputClasses = 
        `
        border-b-2 outline-none border-black flex
        text-left
        ${classInput}`
    
    const labelClasses = 
        `Open-Sans text-sm text-left flex
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
