import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
//let's import the chat engine
import { ChatEngine } from 'react-chat-engine'

function App() {
  if(!localStorage.getItem('username')) return <LoginForm /> 
  
  return(
      <ChatEngine
        height = '100vh'
        projectID = 'f44b7bec-5fa9-4dc5-8d20-ae681b971d87'
        userName = { localStorage.getItem('username') }
        userSecret = { localStorage.getItem('password') }
      //let's render our chat feed
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    )
}

export default App;
