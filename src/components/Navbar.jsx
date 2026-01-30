const Navbar = () => {
    return (
        <div className="Navigation">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#cards">Cards</a></li>
                </ul>
                <button id="changeTheme">Change Theme</button>
            </nav>
        </div>
    );
};

export default Navbar;