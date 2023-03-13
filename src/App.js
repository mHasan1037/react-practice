import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine 
        height="100vh"
        projectID="1e2075b2-7f75-4715-977c-13eec7560365"
        userName="tomholand"
        userSecret="12345"
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App