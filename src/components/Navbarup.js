import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbarup = () => {
    return (
        <Navbar className="Navbar sticky-top justify-content-center" expand="lg">
        <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link  className="navLink text-blue" href="/">About</Nav.Link>
            <Nav.Link  className="navLink text-blue" href="/github">Github</Nav.Link>
            <Nav.Link  className="navLink text-blue" href="/pastprojects">Past projects</Nav.Link>
        </Nav>
        </Navbar>

    )
}

export default Navbarup;