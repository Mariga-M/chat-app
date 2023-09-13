import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import Login from "./components/Login";
import './App.css';

const App = () => {

    if(!localStorage.getItem('userName'))return <Login />

    return ( 
        <ChatEngine 
            height="100vh"
            projectID="e0572015-a23e-482f-b5a7-362d0faba541"
            userName={localStorage.getItem('userName')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App