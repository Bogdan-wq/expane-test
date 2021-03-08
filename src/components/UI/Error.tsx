import React from 'react';

interface ErrorProps {
    className:string,
    label:string,
}

const Error = ({ className,label} : ErrorProps) => {
    return (
        <div className={`${className} flex flex-center text-red-500 text-xl`}>
            {label}
        </div>
    )
}

Error.defaultProps = {
    className:'',
    label:'Something goes wrong with requesting data'
}

export default Error;