import React from 'react'
import './Button.css'

export default props => {
    let typeClass = 'button '
    typeClass += props.operation ? 'operation' : ''
    typeClass += props.double ? 'double' : ''
    typeClass += props.triple ? 'triple' : ''

    return <button className={typeClass} 
    onClick={e => props.click && props.click(props.label)}>
        {props.label}
    </button>
}