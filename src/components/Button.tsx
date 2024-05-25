import React from 'react'

const colorClasses : {[key: string]: string} = {
  'ra-red': 'bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border-2',
  'ra-orange': 'bg-secondary-orange hover:bg-white hover:text-secondary-orange hover:border-secondary-orange hover:border-2',
  'ra-gradient': 'bg-gradient-to-r from-primary to-secondary-orange hover:from-secondary-orange hover:to-primary',
}

function Button({children, color='ra-red', className='', ...props}: {children: React.ReactNode, color?: string, className?: string, [key: string]: any}) {
  const buttonClassses =  
    `text-white font-barlow-regular text-align-center
    border-transparent  
    transition-all duration-125 
    ${colorClasses[color] || colorClasses['ra-red']}
    ${className}`
  
    return (
    <button className={buttonClassses}{...props}>
      {children}
    </button>
  );
}

export default Button
