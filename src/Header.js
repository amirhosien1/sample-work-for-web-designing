import logo from "./assets/logo.png"
import "./Header.css";
import { Link } from "react-router-dom";
import { Offcanvas } from "bootstrap"

function Header(){
    let offcanvasEl = document.getElementById("offcanvas");
        setTimeout((e)=>{
    offcanvasEl = document.getElementById("offcanvas");

        offcanvasEl.addEventListener("hidden.bs.offcanvas", (e)=>{
            let extraFade = document.querySelector("div.offcanvas-backdrop.fade.show");
            if (extraFade && !offcanvasEl.classList.contains("showing")){
                extraFade.parentElement.removeChild(extraFade);
                console.log("first")
            }
        })
    }, 10)
    return (
        <header className='d-flex justify-content-between ps-5 pe-5 max-w-100 align-items-center pb-5 pt-5'>
            <div className="header-items justify-content-start">
                <a href="#offcanvas" data-bs-toggle="offcanvas" role="button">
                    <i className="bi bi-list text-dark"></i>
                </a>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="d-flex flex-column h-auto justify-content-center align-items-start">
                        <Link to="/calculator" onClick={(e)=>{
                            let offcanvasInstance = Offcanvas.getInstance(offcanvasEl);

                            if (!offcanvasInstance){
                                offcanvasInstance = new Offcanvas(offcanvasEl);
                            }
                            offcanvasInstance.hide()}
                    } >
                     Calculator Project
                     </Link>
                       <Link to="/" onClick={(e)=>{
                            let offcanvasInstance = Offcanvas.getInstance(offcanvasEl);

                            if (!offcanvasInstance){
                                offcanvasInstance = new Offcanvas(offcanvasEl);
                            }
                            offcanvasInstance.hide()}}>Todo App Project</Link>
                    </nav>
                </div>
            </div>
            <div className="header-items justify-content-center">
                <div className="header-logo-container">
                    <img src={logo} alt="Logo" className='header-logo' />
                </div>
            </div>
            <div className="header-items justify-content-end">
                Salam
            </div>
        </header>
    )
}

export default Header;