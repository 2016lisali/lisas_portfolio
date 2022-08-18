import { Container, Nav, Navbar } from "react-bootstrap";
export default function Topbar() {
    return (
        <Navbar
            expand="md"
            bg="white"
            collapseOnSelect
            className="fixed-top shadow-sm"
        >
            <Container fluid="xl">
                <Navbar.Brand href="#intro" className="fs-4">
                    LISA LI
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto ms-3 mb-2 mb-md-0">
                        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
