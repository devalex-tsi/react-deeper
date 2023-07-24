const MyParagraph = props => {
    console.log('MyParagraph was rendered')
    return <p>{props.children}</p>
}

export default MyParagraph