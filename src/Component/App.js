import '../Css/App.css';
import '../Css/Reset.css';
import Main from "./Main";
import {useEffect, useState} from "react";

const App = () => {

    const [token, setToken] = useState("토큰입니다.");

    const handleCookie = () => {
        try{
            document.cookie = `token=${token}; path=/`;
        }catch (err){
            console.log(err);
        }
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="logo">MY LIST</h1>
                <button className="test-cookie" onClick={handleCookie}>쿠키 테스트</button>
                <Main />
            </div>
        </div>
    );
}

export default App;
