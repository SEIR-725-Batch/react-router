import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home Page</div>
            </Link>
            <Link to="/currencies">
                <div>Currencies</div>
            </Link>
            <Link to="/currencies/prices">
                <div>Prices</div>
            </Link>
        </div>
    );
};

export default Nav;