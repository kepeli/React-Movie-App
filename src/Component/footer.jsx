import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="innerFooter">
                    <Link to="/">
                        <h1 className="footerLogo">KEPELI</h1>
                    </Link>
                    <h6 className="copyRight">Copyright © <span className="smallFooterLogoName">KEPELI</span> 2023. All Rights Reserved.</h6>

                </div>
            </div>

        </>
    )
}