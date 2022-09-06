import '../Css/App.css';
import '../Css/Reset.css';
import Main from "./Main";

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <h1 className="logo">MY LIST</h1>
                <Main />
            </div>
        </div>
    );
}

export default App;
