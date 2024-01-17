import "./css/SectionHeader.css"

export default function SectionHeader({ headerText, headerSize, font }) {
    return (
        <div>
            <p className={headerSize} id={font}>{headerText}</p>
        </div>
    )
}
