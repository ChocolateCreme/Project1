import { Link } from "react-router-dom";
import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Navbar = () => {

    const {theme, toggleTheme} = useContext(ModeContext)
    return (
        <div className="Navigation">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/add-profile">Add a Profile</Link></li>
                </ul>
                <button id="changeTheme">Change Theme</button>
            </nav>
        </div>
    );
};

export default Navbar;