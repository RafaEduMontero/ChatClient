import React from 'react'
import FormMessage from '../../../atomics/Form_message'

const Input = ({sendMessage,id,className}) => {
    return (
        <FormMessage className={className} sendMessage={sendMessage} id={id}/>
    )
}

export default Input
