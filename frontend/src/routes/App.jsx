import { Link } from "react-router-dom"

export default function App() {
    return (
        <>
            <h1>HOMEPAGE!!</h1>
            <button>
                <Link to={"/admin-xkt"}>Admin Page</Link>
            </button>
        </>
    )
}