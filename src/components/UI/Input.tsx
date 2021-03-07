import React from 'react';

interface InputProps {
    className:string,
    placeholder:string,
    name:string,
    ref?:any,
    error?:boolean,
    helperText?:string,
}

const Input = React.forwardRef(
    ({ className,error,helperText,...inputProps} : InputProps,
     ref) => {

    return (
        <div className={className}>
            <input
                className={`w-full border h-8 ${error ? 'border-red-600' : 'border-gray-400'} rounded pl-2`}
                ref={ref}
                {...inputProps}/>
            {helperText ? <span className="block text-red-600 mt-1 text-xs">{helperText}</span> : null}
        </div>
    )
})

Input.defaultProps = {
    error:false,
    helperText:'',
    className:''
}

export default Input;