import React, {  useRef, useReducer } from 'react'
// immport css and bootStarp
import Card from 'react-bootstrap/Card'
import './chatRoom.css'
//import componet
import Footer from './chatComonent/footer'
import ChatBody from './chatComonent/body'
//import context
import AppReducer from './../../reducers/appReducer'
// import context
import ChatContext from '../../context/chatContext'



const ChatRoom = props => {
    const [state, dispatch] = useReducer(AppReducer, {
               text: []
    })

    // const [messages, setMessages] = useState([])
    // const [text, setText] = useState([])
    const scrollable = useRef()



    // useEffect(() => {
    //     socket.current.on("newMessage", (message) => {
    //         setMessages(messages => messages.concat(message));
    //         scrollable.current.scroll(0, scrollable.current.scrollHeight)

    //     })

    // }, [])
    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         sumbit()
    //     }
    // }
    return (
        <ChatContext.Provider value={{
            props,
            state,
            dispatch
            
        }}>
            <div className='container'>
                <div className="row">
                    <div className='col'>
                        <Card className="cardChat ">
                            <Card.Header className="cardtitle"> صفحه اصلی چت روم</Card.Header>
                            <Card.Body ref={scrollable} className="cardBody">

                                <ChatBody propsChat={props}/>

                            </Card.Body>
                            <Card.Footer className="d-flex cardFooter justify-content-between" >
                                <Footer  propsChat={props} />

                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </ChatContext.Provider>
    )
}

export default ChatRoom