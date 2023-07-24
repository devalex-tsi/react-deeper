import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [isParagraphShown, setIsParagraphShown] = useState(false)
    const [isShowingParagraphAllowed, setIsShowingParagraphAllowed] = useState(false)
    console.log('APP RUNNING', 'isParagraphShown: ', isParagraphShown)

    const onClickAllow = () => {
        setIsShowingParagraphAllowed(true)
    }

    const onClickBtn = useCallback(() => {
        if (isShowingParagraphAllowed) {
            (setIsParagraphShown(
                prevShow => !prevShow
            ))
        }
    }, [])

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={isParagraphShown}/>
            <Button onClick={onClickBtn}>Show Paragraph</Button>
            <Button onClick={onClickAllow}>Allow Show Paragraph</Button>
        </div>
    );
}

export default App;
