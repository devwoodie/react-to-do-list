import '../Css/App.css';
import '../Css/Reset.css';
import Main from "./Main";
import {useState} from "react";
import { Link } from "react-router-dom";

const App = () => {

    const [token, setToken] = useState("qs토wd큰ef입rg니th다oj")

    // 쿠키로 토큰 전송
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

    // 파라미터로 토큰 전송
    const handleButtonClick = () => {
        // 토큰을 파라미터로 사용하여 웹 페이지로 이동하는 로직을 추가합니다.
        const url = `?token=${encodeURIComponent(token)}`;
        window.location.href = url;
    };

    // 웹뷰 전송 로직
    const postMessage = (data) => {
        window.ReactNativeWebView?.postMessage(JSON.stringify({data}));
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="logo">MY LIST</h1>
                <button onClick={handleCookie}>토큰 테스트 버튼</button>
                <button onClick={handleButtonClick}>파라미터 테스트</button>
                <button onClick={() => postMessage(token)}>메세지 보내기 버튼</button>
                <Main />
            </div>
        </div>
    );
}

export default App;
