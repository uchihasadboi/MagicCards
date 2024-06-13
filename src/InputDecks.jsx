import React, { useState } from 'react';
import BasicTextFields from './components/TextFields';
import BasicButtons from './components/Button';
import BasicButtons2 from './components/Button2';

function InputDecks() {
    const [inputRows, setInputRows] = useState([{ id: 1 }]);

    const addRow = () => {
        setInputRows([...inputRows, { id: inputRows.length + 1 }]);
    };

    return (
        <div className="App">
            <h1 className='Header'>Input Your Deck!</h1>
            <div className="right-container">
                {inputRows.map((row, index) => (
                    <div key={index} className='DeckInput'>
                        <BasicTextFields />
                    </div>
                ))}
                <div className='InputButton'>
                    <BasicButtons2 onClick={addRow}></BasicButtons2>
                </div>
                <a href='InputDecks' className='SubmitButton'>
                    <BasicButtons />
                </a>
            </div>
            <div className='Footer'>
                <a href="GamesList">Games List</a>
                <p><a href="/">Back to Home</a></p>
                <p>Astral Studios 2024</p>                
            </div>
        </div>
    );
}

export default InputDecks;
