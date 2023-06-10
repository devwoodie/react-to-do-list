import '../Css/App.css';
import '../Css/Reset.css';
import Main from "./Main";
import {useState} from "react";

const App = () => {

    const [token, setToken] = useState("")

    const handleCookie = () => {
        const receivedToken = 'qs토wd큰ef입rg니th다oj';
        document.cookie = `token=${receivedToken}; path=/`;
        setToken(receivedToken);
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="logo">MY LIST</h1>
                <button onClick={handleCookie}>토큰 테스트 버튼</button>
                <Main />
            </div>
        </div>
    );
}

export default App;
