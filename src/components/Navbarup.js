import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbarup = () => {
    return (
        <Navbar className="Navbar sticky-top justify-content-center" expand="lg">
        <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link  className="navLink text-white" href="/">About</Nav.Link>
            <Nav.Link  className="navLink text-white" href="/pastprojects">Past projects</Nav.Link>
            <Nav.Link  className="navLink text-white" href="/contact">Contact Me</Nav.Link>
            <Nav.Link  className="navLink text-white" href="/images/resume.pdf" target="_blank">Resume</Nav.Link>
        </Nav>
        </Navbar>

    )
}

export default Navbarup;