import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    return (
        <Navbar expand="lg" className="p-3" fixed="top">
            <Navbar.Brand href="/" className="ps-5 fs-2 fst-italic fw-medium">XKT</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="justify-content-evenly">
                    <Nav.Link className="fs-2 fst-italic fw-medium">About Me</Nav.Link>
                    <Nav.Link className="pe-5 ps-5 fs-2 fst-italic fw-medium">Work</Nav.Link>
                    <Nav.Link className="pe-5 fs-2 fst-italic fw-medium">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
