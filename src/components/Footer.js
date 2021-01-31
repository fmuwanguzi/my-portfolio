import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
    return(
        <MDBFooter color="black" className="font-small pt-4 mt-4 fixed-bottom" align-self="flex-end">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> SEI Felix Muwanguzi </a>
                </MDBContainer>
            </div>
    </MDBFooter>
    )
}

export default Footer;