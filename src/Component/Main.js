import List from "./List";
import Regist from "./Regist";
import {useState} from "react";

const Main = () => {

    let [listText, setListText] = useState(['Morning walk', 'Meeting with you','Buy Pizza from Pizzahut']);
    let [plusBtn, setPlusBtn] = useState(false);

    let [check, setCheck] = useState([false, false, false]);
    let [chkClass, setChkClass] = useState(['','','']);

    return (
        <div className="main">
            <TodayDate />
            <span className="task">{listText.length} tasks</span>
            {
                plusBtn == false ? <button className="main-btn regist-btn" onClick={() => {
                    setPlusBtn(true);
                }}>
                    <span className="material-symbols-outlined plus-ic">add</span>
                </button> : null
            }
            <List
                listText={listText} setListText={setListText}
                check={check} setCheck={setCheck}
                chkClass={chkClass} setChkClass={setChkClass}
            />
            {
                plusBtn == true ?
                    <Regist
                        setPlusBtn={setPlusBtn}
                        listText={listText} setListText={setListText}
                        check={check} setCheck={setCheck}
                        chkClass={chkClass} setChkClass={setChkClass}
                    /> : null
            }
        </div>
    )
}

//날짜 component
const TodayDate = () => {
    let date = new Date();
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    let todayWeek = week[date.getDay()]; //요일
    let day = date.getDate(); //일
    let month = monthNames[date.getMonth()]; //월

    return(
        <span className="today-date">{todayWeek}, {day} {month}</span>
    )
}

export default Main;
