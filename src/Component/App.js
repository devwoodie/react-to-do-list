import '../Css/App.css';
import '../Css/Reset.css';
import Main from "./Main";
import {useState} from "react";

const App = () => {

    const [token, setToken] = useState("qs토wd큰ef입rg니th다oj")

    const handleCookie = () => {
        document.cookie = `token=${token}; path=/`;
        const cookies = get_cookie("token");
        // console.log(cookies)
        window.parent.postMessage(cookies, '*');
    }
    // 쿠키 가져오기
    function get_cookie(name) {
        let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
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
