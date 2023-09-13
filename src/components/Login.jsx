import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 
            'Project-ID ': "e0572015-a23e-482f-b5a7-362d0faba541",
            'User-Name': userName ,
            'User-Secret': password,
        }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('userName', userName)
            localStorage.setItem('password', password)
            
            window.location.reload()

        } catch (error) {
            setError('Bummer, Incorrect credentials. Try again')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> My Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input"
                        placeholder="Username or Email"
                        required
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span> Start Chatting 🥳 </span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    )
}

export default Login