import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [isParagraphShown, setIsParagraphShown] = useState(false)
    console.log('APP RUNNING','isParagraphShown: ', isParagraphShown)
    const onClickBtn = () => {
        (setIsParagraphShown(
            prevShow => !prevShow
        ))
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={false}/>
            <Button onClick={onClickBtn}>Show Paragraph</Button>
        </div>
    );
}

export default App;
