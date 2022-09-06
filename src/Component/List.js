
const List = (props) => {

    return(
        <ul className="list-wrap">
            {
                props.listText.map((list, i) => {
                    const checkOk = () => {
                        let copy1 = [... props.check];
                        let copy2 = [... props.chkClass];
                        if(copy1[i] == false){
                            copy1[i] = true;
                            copy2[i] = 'chk-ok';
                            props.setCheck(copy1);
                            props.setChkClass(copy2);
                        }else{
                            copy1[i] = false;
                            copy2[i] = '';
                            props.setCheck(copy1);
                            props.setChkClass(copy2);
                        }
                    }
                    return(
                        <li key={i} className={'list-li '+ props.chkClass[i] } >
                            {
                                props.check[i] === true ? <span className="material-symbols-outlined check-ok">check</span> : <span className="check-box"></span>
                            }
                            <span onClick={() => { checkOk() }} className="list-text">{list}</span>
                            <span className="material-symbols-outlined del-btn" onClick={() => {
                                let copy = [... props.listText];
                                let copyCheck = [... props.check];
                                let copyClass = [... props.chkClass];
                                copy.splice(i, 1);
                                copyCheck.splice(i, 1);
                                copyClass.splice(i, 1);
                                props.setListText(copy);
                                props.setCheck(copyCheck);
                                props.setChkClass(copyClass);
                            }}>delete</span>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default List;