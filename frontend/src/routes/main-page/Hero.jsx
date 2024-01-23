import Image from "react-bootstrap/Image";
import Images from "../../images/Images.jsx";


export default function Hero() {

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Image className="w-100 z-0" style={{}} src={Images.heroBG} fluid />
        </div>
    )
}
