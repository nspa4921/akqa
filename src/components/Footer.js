import React from "react"
import leoLogo from "../images/LEO logo.png";

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <img src={leoLogo} alt="logo" />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase"></h5>
                <ul className="list-unstyled">
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <div className="footer-text">
                    <p>© Copyright LEO Pharma 2020
                        LEO and the LEO Lion Design
                        are registered trademarks
                        of LEO Pharma
                        All rights reserved
                    </p>
                    <p className="leolink"><a href="https://www.leo-pharma.dk/"> LEO Pharma corporate website</a></p>
                </div>
            </div>
        </div>
        <div id="footer" className="links">
            <ul>
                <li>
                    Contact |
                </li>
                <li>
                    Imprint |
                </li>
                <li>
                    Conditions |
                </li>
                <li>
                    Terms of use |
                </li>
                <li>
                    Privacy |
                </li>
                <li>
                    Cookie content
                </li>
            </ul>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright:
        <a href="https://nemocv.netlify.app/"> Nemo</a>
    </div>

</footer>

export default Footer