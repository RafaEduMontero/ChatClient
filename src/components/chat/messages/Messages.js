import React,{Fragment} from 'react'
import Message from '../message/Message';

const Messages = ({messages,user_id}) => {
    return (
        <Fragment>
            {messages.map((message,i) =>{
                return(
                   <Message message={message} key={i} current_uid={user_id}/>
                )
            })}
        </Fragment>
    )
}

export default Messages
