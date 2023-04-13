import React from 'react';

import Messages from './Messages';
import Input from './Input';
import {BsPersonFillAdd, BsCameraVideoFill } from 'react-icons/bs'
import {TfiMoreAlt} from 'react-icons/tfi'
import { IconContext } from 'react-icons';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <IconContext.Provider value={{color: "rgb(202, 177, 177)", size:"1.2em", className: "chatIcons"}}>
                        <BsCameraVideoFill/>
                        <BsPersonFillAdd/>
                        <TfiMoreAlt/>
                    </IconContext.Provider>
                </div>
            </div>
            <Messages />
            <Input />
        </div> 
    );
}
 
export default Chat;