const SpecialButton = ({triggerClick, text}) => {
    return (
        <button onClick={triggerClick}>{text}</button>
    )
}

export default SpecialButton;