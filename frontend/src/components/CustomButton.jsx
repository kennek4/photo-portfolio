export default function CustomButton({ onClickFunction, buttonText }) {
    return (
        <div>
            <button onClick={onClickFunction}>
                <p>{buttonText}</p>
            </button>
        </div>
    )
}
