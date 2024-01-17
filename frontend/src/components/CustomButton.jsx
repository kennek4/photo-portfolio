import "./css/CustomButton.css"

export default function CustomButton({ onClickFunction, buttonText }) {
    return (
        <div id="wrapper">
            <button onClick={onClickFunction}>
                <p id="button-text">{buttonText}</p>
            </button>
        </div>
    )
}
