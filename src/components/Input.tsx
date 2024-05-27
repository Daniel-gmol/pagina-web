import React from 'react'

function Input({className='', classInput='', classLabel='', ...props}) {
    const divClasses = 
        `inline-block relative h-12
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
                name={props.title}
                title={props.title}
                type={props.type}
                autoComplete={props.autocomplete}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                required={props.required}
        />
        {!props.isValid && <small className="error-text">{props.errorMessage}</small>}
        {props.title === 'Password' && (
            <button
                type="button"
                className={`absolute right-1 top-4    '`}
                onClick={props.toggleShowPassword}
            >
            {props.showPassword ? 'HIDE' : 'SHOW'}
            </button>
        )}
    </div>
  )
}

export default Input
