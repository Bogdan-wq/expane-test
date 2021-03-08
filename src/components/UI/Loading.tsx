import React from 'react';

interface LoadingProps {
    className:string,
    label:string,
}

const Loading = ({ className,label} : LoadingProps) => {
    return (
        <div className={`${className} flex flex-center`}>
            <span>{label}</span>
        </div>
    )
}

Loading.defaultProps = {
    className:'',
    label:'Loading...'
}

export default Loading;