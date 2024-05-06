const TextDisplay = ({ text }) => {
    const formattedText = text.replace(/(?:\r\n|\r|\n|\. )/g, '<br />');
    return (
        <div dangerouslySetInnerHTML={{ __html: formattedText }} />
    );
}


export default TextDisplay;