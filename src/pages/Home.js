/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');      //we use , useState to store input's 
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {                 
        e.preventDefault();
        const id = uuidV4();                       //id ke liye const id,
        setRoomId(id);
        toast.success('Created a new room');    // we use toast to display msg "Created a new room"
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect ,state option se yek page ka data dusre page main dalne ke liye state use kiya"username"
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    }; 
    return (                                   //First dashboard,home page 2 div class ke andar code kiye
        <div className="homePageWrapper">           
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="logo1.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}  //enter marke bad bhi ander jayega
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a 
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Made by &nbsp;
                    <a href="https://github.com/Jadhav0427/rceditor">MJ</a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
