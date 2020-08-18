import React, { useContext, useState } from 'react'
import SocketIOClient from 'socket.io-client'

import ChatContext from '../../../context/chatContext'

function Footer(props) {
    const { propsChat } = props
    let[text,setText]=useState('')
    const chatContext = useContext(ChatContext)


    const socket = React.useRef(SocketIOClient.connect("http://localhost:3010/socket"))
    let chengHandler = e => {
        chatContext.dispatch({ type: 'add_text', paylode: e.target.value })
        setText(e.target.value)
    }

    let sumbit = () => {

        socket.current.emit("newMessage", {
            key: Date.now(),
            date: new Date(),
            mes: chatContext.state,
            state: {
                name: propsChat.location.state.name,
                gender: propsChat.location.state.gender
            }
        })
        setText('')
       

    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sumbit()
        }
    }
    
    return (
        <>
            <input type="text" className="input1" onChange={chengHandler}  value={text} onKeyDown={handleKeyDown} placeholder={`  تایپ کنید ...`} />
            <button className=" buttonA" onClick={sumbit}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cursor-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
            </button>
        </>

    )
}

export default Footer