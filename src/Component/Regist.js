import {useState} from "react";

const Regist = (props) => {

    let [newText, setNewText] = useState('');

    const addList = () => {
        let copyText = [... props.listText];
        let copyCheck = [... props.check];
        let copyClass = [... props.chkClass];

        if(props.listText.length < 6){
            copyText.push(newText);
            copyCheck.push(false);
            copyClass.push('');

            props.setListText(copyText);
            props.setCheck(copyCheck);
            props.setChkClass(copyClass);
            setNewText('');
            props.setPlusBtn(false);
        }else{
            alert('List is Full');
            setNewText('');
            props.setPlusBtn(false);
        }
    }

    return(
        <div className="regist-wrap">
            <input
                type="text"
                className="regist-input"
                onChange={(e) => {
                    setNewText(e.target.value);
                }}
            />
            <button className="regist-btn" onClick={() => {
                {
                    newText == '' ? alert('Please Enter your List') : addList()
                }
            }}>
                <span className="material-symbols-outlined plus-ic">add</span>
            </button>
        </div>
    )
}

export default Regist;