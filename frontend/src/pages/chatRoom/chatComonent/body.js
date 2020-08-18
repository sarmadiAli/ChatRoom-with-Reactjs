import React, { useEffect, useState ,useContext} from 'react'
import SocketIOClient from 'socket.io-client'
//import image
import male_user from '../img/male_user.png'
import famle_user from '../img/woman(1).png'
//import boostarpt
import Card from 'react-bootstrap/Card'
//import context
import ChatContext from '../../../context/chatContext'

function BodyChat(props) {
    let chatContext = useContext(ChatContext)
    const socket = React.useRef(SocketIOClient.connect("http://localhost:3010/socket"))

    const {propsChat}=props

    const [messages, setMessages] = useState([])

   
    useEffect(() => {
        socket.current.on("newMessage", (message) => {
            setMessages(messages => messages.concat(message));
            // scrollable.current.scroll(0, scrollable.current.scrollHeight)

        })

    }, [])
    return (
        <>
            {
                messages.map(item => {
                  

                    return (
                        <div className={item.state.name === propsChat.location.state.name ? "imgDiv" : "imgDivReverc"} key={item.key}>

                            <img src={item.state.gender === "0" ? `${male_user}` : `${famle_user}`} title={`${item.state.name}`} className="imgUser" alt="img" />
                            <Card.Text className={item.state.name === propsChat.location.state.name ? "textBorder" : "speechbubble"} >


                                <span> {item.state.name}</span>
                                <span className="messageText">{item.mes}</span>



                            </Card.Text>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BodyChat