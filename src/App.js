import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm'
const App = () => {
    //if not logged in then return a login form
    if(!localStorage.getItem('username')) return < LoginForm />
    return(

        <ChatEngine
        height="100vh"
        projectID="bfe5f684-03b9-48d3-891b-b26ec1d90d1f"
        // userName="javascriptmastery"
        // userSecret="123123" 
        //123 develop barnchwq
        //456
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App