import "./css/SectionHeader.css"

export default function SectionHeader({ headerText, headerSize }) {
    return (
        <div>
            <p id={headerSize}>{headerText}</p>
        </div>
    )
}
