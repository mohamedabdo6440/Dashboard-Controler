import NavbarCompo from "../Components/navCompo"
import Sidebar from "../Components/sideBarCopo"
const Layout = ({ children }) => {
    return (
        <>

            <NavbarCompo />
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <Sidebar />

                    {
                        children
                    }

                </div>
            </div>

        </>
    )
}

export default Layout
