import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {
    console.log('DemoOutput was rendered')
    return <MyParagraph>{props.show ? 'New Paragraph' : ''}</MyParagraph>
}

export default React.memo(DemoOutput)