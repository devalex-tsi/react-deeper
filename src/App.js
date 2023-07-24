import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {
    const [isParagraphShown, setIsParagraphShown] = useState(false)
    const onClickBtn = () => {
        (setIsParagraphShown(
            prevShow => !prevShow
        ))
    }

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {isParagraphShown && <p>New Paragraph</p>}
            <Button onClick={onClickBtn}>Show Paragraph</Button>
        </div>
    );
}

export default App;
