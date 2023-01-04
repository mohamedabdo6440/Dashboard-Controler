import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
            <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li className="nav-item mb-2 mt-3"><span className="nav-link text-secondary" ><Link to="/">Motiv</Link></span></li>
                <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="/"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Assets</span></a></li>

                <li className="nav-item mb-2"><span className="nav-link text-secondary"><i className="far fa-car font-weight-bold"></i> <Link to="booking"><span className="ml-3">Booking</span></Link></span></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/"><i className="fa-solid fa-cart-flatbed-suitcase"></i><span className="ml-3">Sell Cars</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/"><i className="fa-solid fa-cart-shopping"></i><span className="ml-3">Buy Cars</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/"><i className="fa-brands fa-usps"></i><span className="ml-3">Services</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/"><i className="fa-solid fa-calendar-days"></i> <span className="ml-3">Calender</span></a></li>
                <li className="nav-item mb-2"><a className="nav-link text-secondary" href="/"><i className="fa-regular fa-comments"></i><span className="ml-3">Messages</span></a></li>

            </ul>
        </div>
    )
}

export default Sidebar