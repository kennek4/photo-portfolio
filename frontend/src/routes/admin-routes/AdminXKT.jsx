import { Link } from "react-router-dom"
import BlogUpload from "./BlogUpload"

export default function AdminXKT() {
    return (
        <div>
            <h1>Admin!</h1>
            <div>
                <BlogUpload />
            </div>

            <button>
                <Link to={"/"}>Back to homepage!</Link>
            </button>
        </div>
    )
}
