import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav >

            <div >
                <div>
                    <Link
                        to='/'>
                        Home
                    </Link>
                </div>

                <div>
                    <Link to="/destination">
                        Destination
                    </Link>
                </div>

                <div>
                    <Link to="/crew">
                        Crew
                    </Link>
                </div>

                <div>
                    <Link to="/technology">
                        Technology
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;