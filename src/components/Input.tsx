import React from 'react'

function Input({className='', classInput='', classLabel='', ...props}) {
    const divClasses = 
        `inline-block h-12
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
                onBlur={props.onBlur}
        />
        {!props.isValid && <small className="error-text">{props.errorMessage}</small>}
        {props.title === 'Password' && (
            <button
                type="button"
                className={`float-right text-right' ${!props.isValid ? 'mt-[-1.7rem] mr-[-8.75rem]' : 'mt-[-1.7rem]'}`}
                onClick={props.toggleShowPassword}
            >
            {props.showPassword ? 'HIDE' : 'SHOW'}
            </button>
        )}
    </div>
  )
}

export default Input
