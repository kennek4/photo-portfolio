import SectionHeader from '../SectionHeader'
import CustomButton from '../CustomButton'
import IMAGES from '../../images/Images'
import "../css/HeroStyle.css"

export default function Hero() {
    return (
        <div id="main-wrapper">
            <SectionHeader headerText={"xkt.photos"} headerSize={"large"} font={"jost"} />
            <SectionHeader headerText={"PORTFOLIO & BLOG"} headerSize={"medium"} font={"jetbrains"} />
            <SectionHeader headerText={"PHOTOS BY KEN TABANAY"} headerSize={"small"} font={"jetbrains"} />
            <CustomButton onClickFunction={() => console.log("Allo!")} buttonText={"Contact Me"} />
            <img id="hero-banner" src={IMAGES.heroBG} />
        </div>
    )
}
