import React from 'react';
import {BsFillSendFill} from 'react-icons/bs';
import {IoMdAttach} from 'react-icons/io';
import { IconButton } from 'rsuite';

const Input = () => {
    return ( 
        <div className="input">
            <input type="text" placeholder="Type something..." />
            <div className="send">
                <input style={{display:'none'}}type='file' id='file'/>
                    <label htmlFor="file">
                        <IoMdAttach color='rgb(119, 70, 70)' size={20}/>
                    </label>
                    <IconButton className='sendBtn' icon={<BsFillSendFill color='white'/>}/>
            </div>
        </div> 
    
    );
}
 
export default Input;